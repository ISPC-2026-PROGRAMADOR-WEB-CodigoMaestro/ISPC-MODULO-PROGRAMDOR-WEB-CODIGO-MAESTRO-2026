from django.urls import path

from .views import (RolView, RolDetailView, OficioView, OficioDetailView, UbicacionView, UbicacionDetailView, UsuarioView, UsuarioDetailView, ProfesionalesView, LoginView, ContactoView, FavoritoView, FavoritoDetailView)

urlpatterns = [

    ## ROL
    path('roles/', RolView.as_view()),
    path('roles/<int:pk>/', RolDetailView.as_view()),

    ## OFICIO
    path('oficios/', OficioView.as_view()),
    path('oficios/<int:pk>/', OficioDetailView.as_view()),

    ## UBICACION
    path('ubicaciones/', UbicacionView.as_view()),
    path('ubicaciones/<int:pk>/', UbicacionDetailView.as_view()),

    ## CONTACTO
    path('contactos/', ContactoView.as_view()),

    ## USUARIO
    path('usuarios/', UsuarioView.as_view()),
    path('usuarios/<int:pk>/', UsuarioDetailView.as_view()),

    ## PROFESIONALES
    path('profesionales/', ProfesionalesView.as_view()),

    ## FAVORITOS
    path('favoritos/', FavoritoView.as_view()),
    path('favoritos/<int:pk>/', FavoritoDetailView.as_view()),
    
    ## LOGIN
    path('login/', LoginView.as_view()),
]