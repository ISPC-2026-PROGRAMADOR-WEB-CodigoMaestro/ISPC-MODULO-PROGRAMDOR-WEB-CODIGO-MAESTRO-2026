from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def login_view(request):

    email = request.data.get('email')

    password = request.data.get('password')


    if email == "profesional@example.com" and password == "password123":

        return Response({
            'mensaje': 'Login profesional',
            'redirect': '/perfil'
        }, status=status.HTTP_200_OK)


    elif email == "usuario@example.com" and password == "password123":

        return Response({
            'mensaje': 'Login usuario',
            'redirect': '/dashboard'
        }, status=status.HTTP_200_OK)


    return Response({
        'error': 'Credenciales incorrectas'
    }, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def registro_view(request):

    return Response({
        'mensaje': 'Usuario registrado correctamente'
    }, status=status.HTTP_201_CREATED)