from rest_framework import serializers
from .models import Rol, Oficio, Ubicacion, Usuario
from django.contrib.auth.hashers import make_password       # Se utiliza para encriptar la contraseña antes de guardarla en la base de datos
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError

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
        extra_kwargs = {
            'contrasena': {
                'write_only': True,
                'required': False
            },
            'rol': {'read_only': True}
        }

    def validate(self, attrs):
        if self.instance is None and not attrs.get('contrasena'):
            raise serializers.ValidationError({
            'contrasena': 'La contraseña es obligatoria para registrarse.'
        })

        return attrs

    def validate_contrasena(self, value):
        try:
            validate_password(value)
        except DjangoValidationError as error:
            raise serializers.ValidationError(error.messages)

        return value
    
    def create(self, validated_data):
        rol_estandar = Rol.objects.get(nombre_rol='Estándar')         # Se obtiene automáticamente el rol Estándar desde la base de datos
        validated_data['rol'] = rol_estandar                           # Se asigna el rol Estándar al nuevo usuario
        validated_data['contrasena'] = make_password(validated_data['contrasena'])
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        if 'contrasena' in validated_data:
            validated_data['contrasena'] = make_password(validated_data['contrasena'])
        return super().update(instance, validated_data)
