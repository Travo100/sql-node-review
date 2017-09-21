-- Drops the films_db if it exists currently --
DROP DATABASE IF EXISTS films_db;

-- Creates the "films_db" database --
CREATE DATABASE films_db;

-- Makes it so all of the following code will affect films_db --
USE films_db;


-- Creates the table "films" within films_db --
CREATE TABLE films(
	-- Makes an integer column named "id" 
	-- That will auto increment with every record and cannot be null
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
      -- Makes a sting column called "title" --
    title VARCHAR(30),
    -- At the end making our table we declare "id" as our primary key
    PRIMARY KEY(id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO films(title) VALUE ("Inception");
INSERT INTO films(title) VALUE ("Gladiator");

-- Selects all the columns and records from the films table
SELECT * FROM films;