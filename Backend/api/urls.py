from django.urls import path
from .views import prueba_db

urlpatterns = [
    path('prueba/', prueba_db),
]