import jwt

from django.conf import settings
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

from .models import Usuario


class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):

        authorization = request.headers.get('Authorization')

        if not authorization:
            return None

        partes = authorization.split()

        if len(partes) != 2 or partes[0].lower() != 'bearer':
            raise AuthenticationFailed('Formato de autorización inválido')

        token = partes[1]

        try:
            payload = jwt.decode(
                token,
                settings.SECRET_KEY,
                algorithms=['HS256'],
                options={'require': ['sub', 'iat', 'exp', 'type']}
            )

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('El token ha expirado')

        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Token inválido')

        if payload.get('type') != 'access':
            raise AuthenticationFailed('Tipo de token inválido')

        try:
            usuario = Usuario.objects.select_related('rol').get(
                pk=payload.get('sub')
            )

        except (Usuario.DoesNotExist, ValueError, TypeError):
            raise AuthenticationFailed('Usuario no encontrado')

        return (usuario, token)

    def authenticate_header(self, request):
        return 'Bearer'