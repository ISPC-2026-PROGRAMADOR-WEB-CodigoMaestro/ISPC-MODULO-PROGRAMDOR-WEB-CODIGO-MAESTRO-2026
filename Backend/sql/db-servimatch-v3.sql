-- IMPORTANTE:
-- Ejecutar previamente las migraciones de Django:
-- python manage.py makemigrations
-- python manage.py migrate
-- Luego ejecutar este script para cargar los datos de prueba.

CREATE DATABASE IF NOT EXISTS servimatch_db_v3;
USE servimatch_db_v3;

-- ROLES
INSERT INTO api_rol (id, nombre_rol) VALUES
(10, 'Profesional'),
(11, 'Estándar');

-- OFICIOS
INSERT INTO api_oficio (id, nombre_oficio) VALUES
(10, 'Gasista'),
(11, 'Albanil'),
(12, 'Jardinero'),
(13, 'Cerrajero');

-- UBICACIONES
INSERT INTO api_ubicacion (id, ciudad, provincia) VALUES
(10, 'Unquillo', 'Cordoba'),
(11, 'Salsipuedes', 'Cordoba'),
(12, 'Dean Funes', 'Cordoba'),
(13, 'La Calera', 'Cordoba');

-- USUARIOS
INSERT INTO api_usuario
(id, nombre, email, contrasena, dni, rol_id, oficio_id, ubicacion_id)
VALUES
(10, 'Pedro Martinez', 'pedro.martinez@email.com', '85147859', '40111222', 10, 10, 10),
(11, 'Sofia Torres', 'sofia.torres@email.com', '87654321', '41222333', 10, 11, 11),
(12, 'Martin Castro', 'martin.castro@email.com', '45678912', '42333444', 10, 12, 12),
(13, 'Valentina Rojas', 'valentina.rojas@email.com', '78912345', '43444555', 10, 13, 13);

