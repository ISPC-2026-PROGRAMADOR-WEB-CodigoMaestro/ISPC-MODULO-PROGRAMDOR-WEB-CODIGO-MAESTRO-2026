import jwt
from datetime import datetime, timedelta, timezone
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Rol, Oficio, Ubicacion, Usuario
from .serializers import (RolSerializer, OficioSerializer, UbicacionSerializer, UsuarioSerializer)
from django.contrib.auth.hashers import check_password         # Se utiliza para verificar la contraseña durante el proceso de login
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.throttling import AnonRateThrottle

## ROL

class RolView(APIView):

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get(self, request):
        roles = Rol.objects.all()
        serializer = RolSerializer(roles, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):

        if request.user.rol.nombre_rol != 'Administrador':
            return Response(
                {'error': 'Solo los administradores pueden crear roles'},
                status=403
            )

        serializer = RolSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class RolDetailView(APIView):

    def get_object(self, pk):
        try:
            return Rol.objects.get(pk=pk)
        except Rol.DoesNotExist:
            return None

    def get(self, request, pk):
        rol = self.get_object(pk)

        if rol is None:
            return Response({'error': 'Rol no encontrado'}, status=404)

        serializer = RolSerializer(rol)
        return Response(serializer.data, status=200)

    def put(self, request, pk):
        rol = self.get_object(pk)

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden modificar roles'},
                status=403
            )
        
        if rol is None:
            return Response({'error': 'Rol no encontrado'}, status=404)

        serializer = RolSerializer(rol, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        rol = self.get_object(pk)

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden eliminar roles'},
                status=403
        )
        
        if rol is None:
            return Response({'error': 'Rol no encontrado'}, status=404)

        rol.delete()
        return Response({'mensaje': 'Rol eliminado'}, status=204)

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def es_administrador(self, request):
        return request.user.rol.nombre_rol == 'Administrador'

## OFICIO

class OficioView(APIView):

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]

        return [IsAuthenticated()]

    def get(self, request):
        oficios = Oficio.objects.all()
        serializer = OficioSerializer(oficios, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):

        if request.user.rol.nombre_rol != 'Administrador':
            return Response(
                {'error': 'Solo los administradores pueden crear oficios'},
                status=403
            )

        serializer = OficioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class OficioDetailView(APIView):

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]

        return [IsAuthenticated()]

    def get_object(self, pk):
        try:
            return Oficio.objects.get(pk=pk)
        except Oficio.DoesNotExist:
            return None

    def es_administrador(self, request):
        return (
            request.user.rol is not None
            and request.user.rol.nombre_rol == 'Administrador'
        )

    def get(self, request, pk):
        oficio = self.get_object(pk)

        if oficio is None:
            return Response(
                {'error': 'Oficio no encontrado'},
                status=404
            )

        serializer = OficioSerializer(oficio)
        return Response(serializer.data, status=200)

    def put(self, request, pk):

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden modificar oficios'},
                status=403
            )

        oficio = self.get_object(pk)

        if oficio is None:
            return Response(
                {'error': 'Oficio no encontrado'},
                status=404
            )

        serializer = OficioSerializer(oficio, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden eliminar oficios'},
                status=403
            )

        oficio = self.get_object(pk)

        if oficio is None:
            return Response(
                {'error': 'Oficio no encontrado'},
                status=404
            )

        oficio.delete()
        return Response(status=204)

## UBICACION

class UbicacionView(APIView):

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]

        return [IsAuthenticated()]

    def es_administrador(self, request):
        return (
            request.user.rol is not None
            and request.user.rol.nombre_rol == 'Administrador'
        )

    def get(self, request):
        ubicaciones = Ubicacion.objects.all()
        serializer = UbicacionSerializer(ubicaciones, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden crear ubicaciones'},
                status=403
            )

        serializer = UbicacionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class UbicacionDetailView(APIView):

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]

        return [IsAuthenticated()]

    def es_administrador(self, request):
        return (
            request.user.rol is not None
            and request.user.rol.nombre_rol == 'Administrador'
        )

    def get_object(self, pk):
        try:
            return Ubicacion.objects.get(pk=pk)
        except Ubicacion.DoesNotExist:
            return None

    def get(self, request, pk):
        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response(
                {'error': 'Ubicación no encontrada'},
                status=404
            )

        serializer = UbicacionSerializer(ubicacion)
        return Response(serializer.data, status=200)

    def put(self, request, pk):

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden modificar ubicaciones'},
                status=403
            )

        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response(
                {'error': 'Ubicación no encontrada'},
                status=404
            )

        serializer = UbicacionSerializer(ubicacion, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):

        if not self.es_administrador(request):
            return Response(
                {'error': 'Solo los administradores pueden eliminar ubicaciones'},
                status=403
            )

        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response(
                {'error': 'Ubicación no encontrada'},
                status=404
            )

        ubicacion.delete()
        return Response(status=204)

## USUARIO

## USUARIO

class UsuarioView(APIView):

    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]

        return [IsAuthenticated()]

    def get(self, request):

        if request.user.rol.nombre_rol != 'Administrador':
            return Response(
                {'error': 'No tenés permisos para consultar el listado de usuarios'},
                status=403
            )

        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class UsuarioDetailView(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            return None

    def tiene_permiso(self, request, pk):
        es_administrador = request.user.rol.nombre_rol == 'Administrador'
        es_propietario = request.user.id == pk

        return es_administrador or es_propietario

    def get(self, request, pk):

        if not self.tiene_permiso(request, pk):
            return Response(
                {'error': 'No tenés permisos para consultar este usuario'},
                status=403
            )

        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data, status=200)

    def put(self, request, pk):

        if request.user.rol.nombre_rol != 'Administrador':
            return Response(
                {'error': 'No tenés permisos para modificar este usuario'},
                status=403
            )

        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        serializer = UsuarioSerializer(usuario, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):

        if request.user.rol.nombre_rol != 'Administrador':
            return Response(
                {'error': 'No tenés permisos para eliminar este usuario'},
                status=403
            )

        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        usuario.delete()
        return Response({'mensaje': 'Usuario eliminado'}, status=204)
    
class LoginRateThrottle(AnonRateThrottle):
    scope = 'login'

class LoginView(APIView):
    permission_classes = [AllowAny]
    throttle_classes = [LoginRateThrottle]

    def post(self, request):
        email = request.data.get('email')
        contrasena = request.data.get('contrasena')

        if not isinstance(email, str) or not isinstance(contrasena, str) or not email or not contrasena:
            return Response(
                {'error': 'Credenciales incorrectas'}, status=401)

        try:
            usuario = Usuario.objects.get(email=email)

            if check_password(contrasena, usuario.contrasena):

                ahora = datetime.now(timezone.utc)

                payload = {
                    'sub': str(usuario.id),
                    'iat': ahora,
                    'exp': ahora + timedelta(minutes=30),
                    'type': 'access'
                }

                token = jwt.encode(
                    payload,
                    settings.SECRET_KEY,
                    algorithm='HS256'
                )

                return Response(
                    {
                        'mensaje': 'Login exitoso',
                        'id': usuario.id,
                        'nombre': usuario.nombre,
                        'id_rol': usuario.rol.id,
                        'rol': usuario.rol.nombre_rol,
                        'access': token
                    }, status=200)

            return Response(
                {'error': 'Credenciales incorrectas'}, status=401)

        except Usuario.DoesNotExist:

            return Response(
                {'error': 'Credenciales incorrectas'}, status=401)