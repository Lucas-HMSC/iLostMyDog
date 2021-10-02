CREATE DATABASE LOST_DOG_DB;

USE LOST_DOG_DB;
CREATE TABLE INFO_DOG (ID_CAO INT NOT NULL, 
						DATA DATE, 
                        HORA TIME, 
                        AREA INT, 
                        CIDADE VARCHAR(30), 
                        RACA VARCHAR(15), 
                        USR_CADASTRO INT, 
                        ID_CADASTRO INT, 
                        IMAGEM VARCHAR(30),
                        PRIMARY KEY (ID_CAO)
                        );
               
               
USE LOST_DOG_DB;
CREATE TABLE INFO_DONO (ID_CADASTRO INT NOT NULL,
						CIDADE VARCHAR(30),
                        TELEFONE VARCHAR(11),
                        EMAIL VARCHAR(30),
                        NOME VARCHAR(40),
                        ID_CAO INT,
                        FOREIGN KEY (ID_CAO) REFERENCES INFO_DOG(ID_CAO),
                        PRIMARY KEY (ID_CADASTRO)
                        );

ALTER TABLE INFO_DOG
ADD FOREIGN KEY (ID_CADASTRO) REFERENCES INFO_DONO(ID_CADASTRO);

SELECT * FROM INFO_DOG;
SELECT * FROM INFO_DONO;