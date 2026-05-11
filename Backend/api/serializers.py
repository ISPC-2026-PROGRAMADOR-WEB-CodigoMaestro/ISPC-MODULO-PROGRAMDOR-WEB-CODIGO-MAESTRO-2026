from rest_framework import serializers
from .models import Rol, Oficio, Ubicacion, Usuario


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