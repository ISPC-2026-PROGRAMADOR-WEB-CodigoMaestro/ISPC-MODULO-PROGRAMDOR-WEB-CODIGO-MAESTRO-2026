from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Profesional

@api_view(['GET'])
def prueba_db(request):
    cantidad = Profesional.objects.count()
    return Response({
        'mensaje': 'Conexion exitosa',
        'profesionales': cantidad
    })