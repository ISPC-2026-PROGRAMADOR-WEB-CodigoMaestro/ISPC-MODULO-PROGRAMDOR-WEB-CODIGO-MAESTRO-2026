# 🔧 ServiMatch - El servicio ideal, con la confianza que necesitás

### Codigo Maestro Programador Web - Primer Cuatrimestre - 2026

## 🧾 Descripción del Proyecto

🔧 ServiMatch es una aplicación web pensada para facilitar la búsqueda de trabajadores de oficios confiables, como electricistas ⚡, carpinteros 🪚, pintores 🎨 y otros profesionales independientes.

Actualmente, muchas personas tienen dificultades para encontrar prestadores de servicios que sean realmente responsables, cuenten con buenas referencias ⭐ y ofrezcan seguridad 🔒 al momento de contratarlos. En la mayoría de los casos, la búsqueda se realiza por recomendaciones informales, redes sociales 📱 o publicaciones sin ningún tipo de validación, lo que genera desconfianza ❌ e incertidumbre 🤔.

Frente a esta problemática, el proyecto propone una plataforma web 🌐 que funcione como un directorio de oficios verificados, donde los usuarios puedan buscar profesionales según su ubicación 📍, conocer sus calificaciones reales ⭐, consultar su disponibilidad 📅 y comunicarse de forma directa 💬.

La propuesta de valor de ServiMatch se basa en brindar mayor confianza 🤝, seguridad 🔐 y transparencia en el proceso de contratación, incorporando diferenciales como la verificación de identidad 🪪, el historial de trabajos realizados 🧾 y un sistema de contacto directo entre cliente y profesional. De esta manera, se busca mejorar la experiencia de los usuarios 😊 y ofrecer una solución más confiable y organizada para contratar servicios de oficios.

## 🚀 Tecnologías utilizadas

- Frontend: Angular + Bootstrap
- Backend: Django + Django Rest Framework
- Base de datos: MySQL
- Control de versiones: Git y GitHub

## ⚙️ Instrucciones de instalación

### Backend (Django + DRF)

1. Ingresar a la carpeta:
cd Backend

2. Crear entorno virtual:
python -m venv mi_app

3. Activar entorno:
mi_app\Scripts\activate

4. Instalar dependencias:
pip install -r requirements.txt

5. Configurar variables de entorno:
Crear archivo .env basado en .env_modelo

- DB_NAME=nombre_db
- DB_USER=usuario
- DB_PASSWORD=contraseña
- DB_HOST=localhost
- DB_PORT=3306

6. Ejecutar migraciones:
python manage.py migrate

7. Levantar servidor:
python manage.py runserver

### Frontend (Angular)

1. Ir a la carpeta:
cd Frontend/app

2. Instalar dependencias:
npm install

3. Ejecutar proyecto:
ng serve

4. Abrir en navegador:
http://localhost:4200

## ▶️ Uso básico

- El usuario accede a la landing page de la plataforma.
- Puede buscar profesionales según el tipo de servicio.
- Visualiza perfiles con información relevante.
- Puede contactar directamente a los profesionales.

## 📋 Especificación de Requerimientos

### Requerimientos Funcionales 

- **RF1:** El usuario podrá registrarse e iniciar sesión en la plataforma mediante credenciales.

- **RF2:** El usuario podrá buscar profesionales según el tipo de oficio y la ubicación.

- **RF3:** El usuario podrá visualizar el perfil de cada profesional, incluyendo datos personales, experiencia, calificaciones y trabajos realizados.

- **RF4:** El usuario podrá contactar directamente al profesional a través de la plataforma.

- **RF5:** El administrador podrá validar perfiles de profesionales y gestionar los usuarios registrados.


### Requerimientos no funcionales

- **RNF1:** Diseño Responsivo: La interfaz debe adaptarse automáticamente a pantallas de móviles, tablets y computadoras (usando los breakpoints de Bootstrap).

- **RNF2:** Validación: El sistema no debe permitir el envío de formularios con campos vacíos o formatos de correo electrónico inválidos (validación del lado del cliente).

- **RNF3:** Integridad de Datos (Persistencia): El sistema debe garantizar que, ante una caída del servidor, los datos almacenados en la base de datos MySQL no sufran inconsistencias ni pérdidas, asegurando la recuperación del último estado estable.

## 👥 Integrantes del equipo

- Kevin Cristofer Lorea Tannfeld
- Guadalupe Magali Turri Sánchez
- Franco Daniel Gimenez Benitez
- Emilce Agustina Torres
- Agustin Exequiel Gimenez Benitez
