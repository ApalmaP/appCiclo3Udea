CREATE DATABASE basedatos_app;

USE basedatos_links;

CREATE TABLE usuarios(
    id INT(12) NOT NULL,
    nombreUsuario VARCHAR(18) NOT NULL
    contraseña VARCHAR(30) NOT NULL
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE usuarios;
