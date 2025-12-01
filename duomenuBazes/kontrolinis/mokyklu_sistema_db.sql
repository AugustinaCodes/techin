DROP DATABASE IF EXISTS mokyklu_sistema;
CREATE DATABASE mokyklu_sistema;
USE mokyklu_sistema;

CREATE TABLE mokyklos (
    id INT NOT NULL,
    pavadinimas VARCHAR(30) NOT NULL,
    bustines_adresas VARCHAR(30),
    pagalbos_tel_nr VARCHAR(20),
    PRIMARY KEY (id)
);