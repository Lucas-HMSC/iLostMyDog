CREATE DATABASE LOST_DOG_DB;

USE LOST_DOG_DB;
CREATE TABLE INFO_DOG (ID_CAO INT NOT NULL AUTO_INCREMENT, 
                        AREA INT, 
                        CIDADE VARCHAR(30), 
                        ID_RACA INT, 
                        USR_CADASTRO INT, 
                        ID_CADASTRO INT,
                        PRIMARY KEY (ID_CAO)
                        );
               
USE LOST_DOG_DB;
CREATE TABLE INFO_DONO (ID_CADASTRO INT NOT NULL AUTO_INCREMENT,
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

USE LOST_DOG_DB;
CREATE TABLE RACAS (ID_RACA INT NOT NULL AUTO_INCREMENT,
					RACA VARCHAR(20),
                    PRIMARY KEY (ID_RACA)
                    );

INSERT INTO RACAS (ID_RACA, RACA) VALUES (1, 'ROTTWEILER'), (2, 'BULLDOG'), (3, 'PUG'), (4, 'PASTOR ALEMAO'), (5, 'LABRADOR');

ALTER TABLE INFO_DOG
ADD FOREIGN KEY (ID_RACA) REFERENCES RACAS(ID_RACA);

USE LOST_DOG_DB;
CREATE TABLE POSTAGENS (ID_POST INT NOT NULL AUTO_INCREMENT,
						DATA DATE,
                        HORA TIME,
                        ID_CAO INT,
                        FOREIGN KEY (ID_CAO) REFERENCES INFO_DOG(ID_CAO),
                        PRIMARY KEY (ID_POST)
						);

USE LOST_DOG_DB;
CREATE TABLE IMAGENS (ID_IMAGENS INT NOT NULL AUTO_INCREMENT,
					  PATH VARCHAR(30),
                      ID_POST INT,
                      FOREIGN KEY (ID_POST) REFERENCES POSTAGENS(ID_POST),
                      PRIMARY KEY (ID_IMAGENS)
                    );

SELECT * FROM INFO_DOG;
SELECT * FROM INFO_DONO;
SELECT * FROM RACAS;