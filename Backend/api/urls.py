from django.urls import path
from . import views

urlpatterns = [

    path('login/', views.login_view),

    path('registro/', views.registro_view),

]