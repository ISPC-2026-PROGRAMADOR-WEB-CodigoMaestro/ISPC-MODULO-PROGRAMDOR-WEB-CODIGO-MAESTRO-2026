# 🔧 ServiMatch - El servicio ideal, con la confianza que necesitás

### Código Maestro - Programador Web - Primer Cuatrimestre 2026

## 🧾 Descripción del Proyecto

**ServiMatch** es una aplicación web desarrollada para facilitar la búsqueda de trabajadores de oficios confiables en la provincia de Córdoba, tales como electricistas, carpinteros, pintores, plomeros, gasistas y otros profesionales independientes.

Actualmente, muchas personas que residen en distintas localidades de Córdoba enfrentan dificultades para encontrar prestadores de servicios que sean responsables, cuenten con experiencia comprobable y generen confianza al momento de contratarlos. En la mayoría de los casos, la búsqueda se realiza mediante recomendaciones informales, grupos de redes sociales o publicaciones sin ningún tipo de validación, lo que puede generar desconfianza, incertidumbre y riesgos para los usuarios.

Frente a esta problemática, ServiMatch propone una plataforma web que funcione como un directorio digital de trabajadores de oficios verificados en Córdoba, permitiendo a los usuarios buscar profesionales según su localidad o ciudad , conocer sus calificaciones y opiniones , consultar su experiencia laboral y establecer un contacto directo de manera rápida y segura.

La propuesta de valor de ServiMatch se basa en brindar mayor confianza , seguridad y transparencia en el proceso de contratación, incorporando características como la verificación de identidad , la visualización del historial de trabajos realizados, la valoración de los servicios por parte de otros usuarios y la posibilidad de encontrar profesionales cercanos a la ubicación del cliente.

De esta manera, la plataforma busca fortalecer la conexión entre clientes y trabajadores de oficios de la provincia de Córdoba, promoviendo oportunidades laborales para los profesionales y ofreciendo una solución confiable, organizada y accesible para la contratación de servicios.

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

5. Crear base de datos MySQL
CREATE DATABASE servimatch_db_v3;

6. Configurar variables de entorno:
Crear archivo .env basado en .env_modelo

- DB_NAME=nombre_db
- DB_USER=usuario
- DB_PASSWORD=contraseña
- DB_HOST=localhost
- DB_PORT=3306

7. Ejecutar migraciones:
python manage.py makemigrations
python manage.py migrate

8. Importar el script SQL:
Backend/sql/db-servimatch-v3.sql

9. Levantar servidor:
python manage.py runserver

10. Endpoints de prueba:

- http://127.0.0.1:8000/api/usuarios/
- http://127.0.0.1:8000/api/oficios/
- http://127.0.0.1:8000/api/ubicaciones/
- http://127.0.0.1:8000/api/roles/
- http://127.0.0.1:8000/api/login/ 

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

1. El usuario accede a la página principal.
2. Puede registrarse mediante el formulario de registro.
3. Puede iniciar sesión utilizando sus credenciales.
4. El sistema valida las credenciales contra la base de datos.
5. Puede visualizar información detallada de cada profesional.
6. Puede establecer contacto directo con el profesional seleccionado.

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

## 🌿 Flujo de Trabajo

El equipo utiliza una estrategia basada en Git Flow:

- main: versión estable del proyecto.
- develop: rama de integración de funcionalidades.
- feature/nombre-integrante: desarrollo individual de funcionalidades.
- Pull Request hacia develop para revisión e integración.
- Una vez validadas las funcionalidades, develop se integra en main.

## 👥 Integrantes del equipo

| Integrante | Rol |
|------------|------|
| Agustin Exequiel Gimenez Benitez | Scrum Master |
| Guadalupe Magali Turri Sánchez | Developer |
| Franco Daniel Gimenez Benitez | Developer |
| Emilce Agustina Torres | Developer |
| Kevin Cristofer Lorea Tannfeld | Developer |