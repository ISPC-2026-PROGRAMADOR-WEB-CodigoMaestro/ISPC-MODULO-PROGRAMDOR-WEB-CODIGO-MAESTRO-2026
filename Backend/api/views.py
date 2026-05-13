from rest_framework.response import Response
from rest_framework.views import APIView as ApiView

from .models import Rol, Oficio, Ubicacion, Usuario
from .serializers import (
    RolSerializer,
    OficioSerializer,
    UbicacionSerializer,
    UsuarioSerializer
)

## ROL

class RolView(ApiView):

    def get(self, request):
        roles = Rol.objects.all()
        serializer = RolSerializer(roles, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = RolSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class RolDetailView(ApiView):

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

        if rol is None:
            return Response({'error': 'Rol no encontrado'}, status=404)

        serializer = RolSerializer(rol, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        rol = self.get_object(pk)

        if rol is None:
            return Response({'error': 'Rol no encontrado'}, status=404)

        rol.delete()
        return Response({'mensaje': 'Rol eliminado'}, status=204)

## OFICIO

class OficioView(ApiView):

    def get(self, request):
        oficios = Oficio.objects.all()
        serializer = OficioSerializer(oficios, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = OficioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class OficioDetailView(ApiView):

    def get_object(self, pk):
        try:
            return Oficio.objects.get(pk=pk)
        except Oficio.DoesNotExist:
            return None

    def get(self, request, pk):
        oficio = self.get_object(pk)

        if oficio is None:
            return Response({'error': 'Oficio no encontrado'}, status=404)

        serializer = OficioSerializer(oficio)
        return Response(serializer.data, status=200)

    def put(self, request, pk):
        oficio = self.get_object(pk)

        if oficio is None:
            return Response({'error': 'Oficio no encontrado'}, status=404)

        serializer = OficioSerializer(oficio, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        oficio = self.get_object(pk)

        if oficio is None:
            return Response({'error': 'Oficio no encontrado'}, status=404)

        oficio.delete()
        return Response({'mensaje': 'Oficio eliminado'}, status=204)

## UBICACION

class UbicacionView(ApiView):

    def get(self, request):
        ubicaciones = Ubicacion.objects.all()
        serializer = UbicacionSerializer(ubicaciones, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = UbicacionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class UbicacionDetailView(ApiView):

    def get_object(self, pk):
        try:
            return Ubicacion.objects.get(pk=pk)
        except Ubicacion.DoesNotExist:
            return None

    def get(self, request, pk):
        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response({'error': 'Ubicación no encontrada'}, status=404)

        serializer = UbicacionSerializer(ubicacion)
        return Response(serializer.data, status=200)

    def put(self, request, pk):
        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response({'error': 'Ubicación no encontrada'}, status=404)

        serializer = UbicacionSerializer(ubicacion, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        ubicacion = self.get_object(pk)

        if ubicacion is None:
            return Response({'error': 'Ubicación no encontrada'}, status=404)

        ubicacion.delete()
        return Response({'mensaje': 'Ubicación eliminada'}, status=204)

## USUARIO

class UsuarioView(ApiView):

    def get(self, request):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


class UsuarioDetailView(ApiView):

    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            return None

    def get(self, request, pk):
        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data, status=200)

    def put(self, request, pk):
        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        serializer = UsuarioSerializer(usuario, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        usuario = self.get_object(pk)

        if usuario is None:
            return Response({'error': 'Usuario no encontrado'}, status=404)

        usuario.delete()
        return Response({'mensaje': 'Usuario eliminado'}, status=204)