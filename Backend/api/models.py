from django.db import models
from django.core.validators import RegexValidator        # Agregado para validar el formato del DNI

class Rol(models.Model):
    nombre_rol = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre_rol

class Oficio(models.Model):
    nombre_oficio = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre_oficio

class Ubicacion(models.Model):
    ciudad = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.ciudad}, {self.provincia}"

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contrasena = models.CharField(max_length=100)
    dni = models.CharField(max_length=8, unique=True, validators=[RegexValidator(regex=r'^\d{7,8}$')])    
    rol = models.ForeignKey(Rol, on_delete=models.PROTECT)
    oficio = models.ForeignKey(Oficio, on_delete=models.PROTECT, null=True)
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return f"{self.usuario.nombre}, {self.asunto}"      

    @property
    def is_authenticated(self):
        return True  

    def __str__(self):
        return self.nombre

class Contacto(models.Model):

    ASUNTOS = [
        ('Consulta general', 'Consulta general'),
        ('Sugerencia', 'Sugerencia'),
        ('Reportar un problema', 'Reportar un problema'),
        ('Otro', 'Otro'),
    ]

    asunto = models.CharField(max_length=50, choices=ASUNTOS)
    mensaje = models.TextField(max_length=1000)
    fecha = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Favorito(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='favoritos')
    profesional = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='guardado_por')

    class Meta:
        unique_together = ('usuario', 'profesional')
