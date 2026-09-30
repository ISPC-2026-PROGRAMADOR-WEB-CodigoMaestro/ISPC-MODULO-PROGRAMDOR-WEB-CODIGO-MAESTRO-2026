-- =====================================================
-- Base de Datos ServiMatch v4
-- =====================================================
-- Importante:
-- Ejecutar previamente las migraciones de Django:
-- python manage.py makemigrations
-- python manage.py migrate
--
-- Luego ejecutar este script para cargar los datos iniciales.
-- =====================================================


CREATE DATABASE IF NOT EXISTS servimatch_db_v4;

USE servimatch_db_v4;


-- =====================================================
-- ROLES
-- =====================================================

INSERT INTO api_rol (id, nombre_rol) VALUES
(10, 'Administrador'),
(11, 'Estándar');


-- =====================================================
-- OFICIOS
-- =====================================================

INSERT INTO api_oficio (id, nombre_oficio) VALUES
(10, 'Electricista'),
(11, 'Plomero'),
(12, 'Gasista'),
(13, 'Albañil'),
(14, 'Carpintero'),
(15, 'Pintor'),
(16, 'Jardinero'),
(17, 'Cerrajero'),
(18, 'Mecánico'),
(19, 'Herrero'),
(20, 'Techista'),
(21, 'Instalador de Aire Acondicionado'),
(22, 'Técnico en Refrigeración'),
(23, 'Técnico en Electrodomésticos'),
(24, 'Limpieza de Hogar');


-- =====================================================
-- UBICACIONES
-- =====================================================

INSERT INTO api_ubicacion (id, ciudad, provincia) VALUES
(10, 'Córdoba', 'Córdoba'),
(11, 'Río Cuarto', 'Córdoba'),
(12, 'Villa María', 'Córdoba'),
(13, 'Villa Carlos Paz', 'Córdoba'),
(14, 'San Francisco', 'Córdoba'),
(15, 'Alta Gracia', 'Córdoba'),
(16, 'Río Tercero', 'Córdoba'),
(17, 'La Calera', 'Córdoba'),
(18, 'Bell Ville', 'Córdoba'),
(19, 'Cruz del Eje', 'Córdoba'),
(20, 'Villa Allende', 'Córdoba'),
(21, 'Jesús María', 'Córdoba'),
(22, 'Villa Dolores', 'Córdoba'),
(23, 'Marcos Juárez', 'Córdoba'),
(24, 'Arroyito', 'Córdoba'),
(25, 'Río Ceballos', 'Córdoba'),
(26, 'Villa Nueva', 'Córdoba'),
(27, 'Malagueño', 'Córdoba'),
(28, 'Cosquín', 'Córdoba'),
(29, 'Deán Funes', 'Córdoba'),
(30, 'Colonia Caroya', 'Córdoba'),
(31, 'Unquillo', 'Córdoba'),
(32, 'Laboulaye', 'Córdoba'),
(33, 'Río Segundo', 'Córdoba'),
(34, 'Morteros', 'Córdoba'),
(35, 'Santa Rosa de Calamuchita', 'Córdoba'),
(36, 'Las Varillas', 'Córdoba'),
(37, 'Pilar', 'Córdoba'),
(38, 'Villa del Rosario', 'Córdoba'),
(39, 'La Falda', 'Córdoba'),
(40, 'Salsipuedes', 'Córdoba');