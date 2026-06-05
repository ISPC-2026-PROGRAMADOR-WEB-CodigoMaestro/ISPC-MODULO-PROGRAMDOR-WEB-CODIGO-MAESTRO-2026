from rest_framework import serializers
from .models import Rol, Oficio, Ubicacion, Usuario
from django.contrib.auth.hashers import make_password       # Se utiliza para encriptar la contraseña antes de guardarla en la base de datos


class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'


class OficioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oficio
        fields = '__all__'


class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = '__all__'


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        extra_kwargs = {                                              # Esto hace que el campo 'contrasena' no se incluya en las respuestas del API 
            'contrasena': {'write_only': True}                        
        }

    def create(self, validated_data):
        validated_data['contrasena'] = make_password(validated_data['contrasena'])               
        return super().create(validated_data)