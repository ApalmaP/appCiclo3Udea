CREATE DATABASE basedatos_app;

USE basedatos_app;

CREATE TABLE usuarios(
    id INT(12) NOT NULL,
    nombreUsuario VARCHAR(18) NOT NULL
    contraseña VARCHAR(30) NOT NULL
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;


CREATE DATABASE basedatos_app;

USE basedatos_app;

CREATE TABLE productos(
    id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2,
    repuestos VARCHAR(20) NOT NULL,
    sistema VARCHAR(15) NOT NULL,
    linea_vehicular VARCHAR(16) NOT NULL
);

ALTER TABLE productos
    ADD PRIMARY KEY (id);


CREATE DATABASE basedatos_app;

USE basedatos_app;

CREATE TABLE ventas(
    id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1,
    repuestos VARCHAR(20) NOT NULL,
    valor_unitario INT(30) NOT NULL,
    linea_vehicular VARCHAR(16) NOT NULL,
    user_id INT(12),
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_usuario FOREING KEY (user_id) REFERENCES usuarios(id)
);  

ALTER TABLE ventas
    ADD PRIMARY KEY (id);





DESCRIBE usuarios;


