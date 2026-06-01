# Diagrama de Clases - ServiMatch

## 📋 Descripción General

Este documento describe la arquitectura orientada a objetos del sistema **ServiMatch**, incluyendo las clases, atributos, métodos y relaciones principales del sistema.

ServiMatch es una plataforma orientada a la gestión de usuarios, oficios y ubicaciones, permitiendo conectar personas con distintos servicios y especialidades.

---

# 🏗️ Arquitectura del Sistema

El sistema sigue una arquitectura en capas:

```text
┌─────────────────────────────────────┐
│         Capa de Presentación        │
│        (Angular - Frontend)         │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│       Capa de Lógica de Negocio     │
│       (Services / API REST)         │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│          Capa de Modelo             │
│        (Models / Entities)          │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│      Capa de Acceso a Datos         │
│        (Django ORM / MySQL)         │
└─────────────────────────────────────┘
```

---

# 📦 Clases del Modelo

## 1. **Usuario**

### 📌 Descripción

Representa a los usuarios registrados dentro de la plataforma.

Cada usuario posee un rol, un oficio y una ubicación asociados mediante claves foráneas.

---

### 📌 Atributos

* `id_usuario: int` - Identificador único del usuario (PK)
* `nombre: str` - Nombre completo del usuario
* `email: str` - Correo electrónico único
* `contrasena: str` - Contraseña del usuario
* `dni: int` - Documento nacional de identidad
* `id_rol: int` - Clave foránea relacionada con Rol
* `id_oficio: int` - Clave foránea relacionada con Oficio
* `id_ubicacion: int` - Clave foránea relacionada con Ubicacion

---

### 📌 Métodos

* `registrar_usuario()` - Registra un nuevo usuario
* `iniciar_sesion()` - Permite iniciar sesión
* `cerrar_sesion()` - Finaliza la sesión del usuario
* `editar_perfil()` - Modifica los datos personales
* `mostrar_perfil()` - Muestra la información del usuario

---

### 📌 Validaciones

* ✅ Email obligatorio y único
* ✅ DNI único
* ✅ Contraseña obligatoria
* ✅ Nombre obligatorio
* ✅ Oficio válido
* ✅ Rol válido

---

## 2. **Rol**

### 📌 Descripción

Define el rol y permisos de los usuarios dentro del sistema.

---

### 📌 Atributos

* `id_rol: int` - Identificador único del rol (PK)
* `nombre_rol: str` - Nombre del rol

---

### 📌 Métodos

* `crear_rol()` - Crea un nuevo rol
* `editar_rol()` - Modifica un rol existente
* `listar_roles()` - Lista todos los roles

---

### 📌 Roles posibles

* Administrador
* Cliente
* Trabajador

---

### 📌 Relación

Un rol puede estar asociado a múltiples usuarios.

```text
Rol 1 ---- N Usuarios
```

---

## 3. **Oficio**

### 📌 Descripción

Representa el oficio o especialidad laboral del usuario.

Ejemplos:

* Electricista
* Albañil
* Pintor
* Plomero
* Técnico

---

### 📌 Atributos

* `id_oficio: int` - Identificador único del oficio (PK)
* `nombre_oficio: str` - Nombre del oficio

---

### 📌 Métodos

* `crear_oficio()` - Agrega un nuevo oficio
* `editar_oficio()` - Modifica un oficio existente
* `eliminar_oficio()` - Elimina un oficio
* `listar_oficios()` - Lista todos los oficios registrados

---

### 📌 Relación

Un oficio puede pertenecer a múltiples usuarios.

```text
Oficio 1 ---- N Usuarios
```

---

## 4. **Ubicacion**

### 📌 Descripción

Representa la ubicación geográfica del usuario.

---

### 📌 Atributos

* `id_ubicacion: int` - Identificador único de la ubicación (PK)
* `ciudad: str` - Ciudad del usuario
* `provincia: str` - Provincia del usuario

---

### 📌 Métodos

* `mostrar_ubicacion()` - Muestra la ubicación del usuario
* `editar_ubicacion()` - Permite actualizar la ubicación

---

### 📌 Relación

Una ubicación puede estar asociada a múltiples usuarios.

```text
Ubicacion 1 ---- N Usuarios
```

---

# 🔗 Relaciones entre Clases

| Clase A | Relación | Clase B   | Cardinalidad | Descripción                          |
| ------- | -------- | --------- | ------------ | ------------------------------------ |
| Usuario | tiene    | Rol       | N:1          | Un usuario posee un rol              |
| Usuario | tiene    | Oficio    | N:1          | Un usuario posee un oficio           |
| Usuario | tiene    | Ubicacion | N:1          | Un usuario pertenece a una ubicación |

---

# 🎯 Patrones de Diseño Utilizados

## 1. **Patrón MVC**

Separación entre:

* Modelo → Entidades y clases
* Vista → Interfaces Angular
* Controlador → API REST y lógica backend

---

## 2. **Patrón ORM**

Uso de Django ORM para gestionar la base de datos.

```text
Usuario.objects.all()
Rol.objects.filter()
Oficio.objects.create()
```

---

## 3. **Patrón Service Layer**

La lógica de negocio se separa de las vistas y modelos.

```text
usuario_service.py
auth_service.py
oficio_service.py
ubicacion_service.py
```

---

# 🔐 Seguridad y Validaciones

## Usuarios

* ✅ Validación de email único
* ✅ Validación de campos obligatorios
* ✅ Relaciones mediante claves foráneas
* ✅ Protección de autenticación

---

## Roles

* ✅ Control de permisos
* ✅ Restricción de acceso según rol

---

# 📊 Diagrama UML Simplificado

```text
┌─────────────────────────────┐
│          Usuario            │
├─────────────────────────────┤
│ id_usuario : int            │
│ nombre : str                │
│ email : str                 │
│ contrasena : str            │
│ dni : int                   │
│ id_rol : int                │
│ id_oficio : int             │
│ id_ubicacion : int          │
├─────────────────────────────┤
│ registrar_usuario()         │
│ iniciar_sesion()            │
│ editar_perfil()             │
│ mostrar_perfil()            │
└─────────────────────────────┘

        N             1
Usuario ───────────── Rol

        N             1
Usuario ──────────── Oficio

        N             1
Usuario ────────── Ubicacion
```

---

# 🚀 Extensibilidad Futura

El sistema permite fácilmente:

1. Agregar nuevos roles
2. Implementar sistema de calificaciones
3. Incorporar chat entre usuarios
4. Agregar imágenes de perfil
5. Añadir historial de trabajos
6. Implementar pagos online
7. Incorporar sistema de contrataciones
8. Agregar disponibilidad horaria

---

# 📝 Notas de Implementación

## 📂 Estructura de Archivos

```text
backend/
├── models/
│   ├── usuario.py
│   ├── rol.py
│   ├── oficio.py
│   └── ubicacion.py
│
├── services/
│   ├── usuario_service.py
│   ├── auth_service.py
│   ├── oficio_service.py
│   └── ubicacion_service.py
│
├── serializers/
│   └── usuario_serializer.py
│
├── views/
│   ├── usuario_views.py
│   └── auth_views.py
│
└── db/
    └── connection.py
```

---

## 📌 Base de Datos Relacional

Tablas principales:

* usuarios
* rol
* oficio
* ubicacion

Relaciones mediante claves foráneas:

* `id_rol`
* `id_oficio`
* `id_ubicacion`

---

# ✅ Conclusión

El sistema ServiMatch posee una estructura modular, organizada y escalable, permitiendo gestionar usuarios, roles, oficios y ubicaciones mediante relaciones bien definidas y una arquitectura preparada para futuras funcionalidades.

---

**Última actualización:** junio 2026
**Versión del documento:** 1.0
