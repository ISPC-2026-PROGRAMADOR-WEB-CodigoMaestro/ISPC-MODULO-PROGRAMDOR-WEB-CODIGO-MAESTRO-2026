from django.db import models

class Rol(models.Model):
    nombre_rol = models.CharField(max_length=50)

class Oficio(models.Model):
    nombre_oficio = models.CharField(max_length=100)

class Ubicacion(models.Model):
    ciudad = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contrasena = models.CharField(max_length=100)
    dni = models.CharField(max_length=20)

    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    oficio = models.ForeignKey(
        Oficio,
        on_delete=models.SET_NULL,
        null = True
    )

    ubicacion = models.ForeignKey(
        Ubicacion,
        on_delete=models.SET_NULL,
        null = True
    )

    def __str__(self):
        return self.nombre