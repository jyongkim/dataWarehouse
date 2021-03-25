DROP DATABASE Data_Warehouse;
CREATE DATABASE IF NOT EXISTS Data_Warehouse;
USE Data_Warehouse;

CREATE TABLE Regions (
	id_region INT AUTO_INCREMENT,
    region VARCHAR (100),
	PRIMARY KEY (id_region),
    UNIQUE KEY (region)
);
INSERT INTO Regions(region)
VALUES
	('East Asia & Pacific'),
	('Europe & Central Asia'),
	('Latin America & Caribbean'),
	('Middle East & North Africa'),
	('North America'),
	('South Asia'),
	('Sub-Saharan Africa');

CREATE TABLE IF NOT EXISTS `Countries`(
    `id_region` INT DEFAULT 3,
    `id_country` CHAR(2) NOT NULL,
    `Country` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_country`),
    FOREIGN KEY (`id_region`) REFERENCES Regions(`id_region`)
);

CREATE TABLE IF NOT EXISTS `Cities`(
    `id_city` int(11) NOT NULL AUTO_INCREMENT,
    `id_country` varchar(2) NOT NULL,
    `City` varchar(100) NOT NULL,
    PRIMARY KEY (`id_city`),
	FOREIGN KEY (`id_country`) REFERENCES Countries (`id_country`),
    UNIQUE KEY (`id_country`, `City`)
);

CREATE TABLE Roles (
    `id_role` INT AUTO_INCREMENT,
    `role` VARCHAR(20),
    PRIMARY KEY(id_role)
);

CREATE TABLE Users(
    `id_user` INT AUTO_INCREMENT,
    `id_role` INT NOT NULL,
    `user_name` VARCHAR (20) NOT NULL,
    `name` VARCHAR (50),
    `password` VARCHAR (20) NOT NULL,
    `email` VARCHAR (100) NOT NULL,
    PRIMARY KEY (`id_user`),
    UNIQUE KEY (`user_name`),
    UNIQUE KEY (`email`),
    FOREIGN KEY (`id_role`) REFERENCES Roles (`id_role`)
);

CREATE TABLE Companies(
    `id_company` INT AUTO_INCREMENT,
    `id_user` INT NOT NULL,
    `company` VARCHAR (100) NOT NULL,
    `id_city` INT NOT NULL,
    `address` VARCHAR (100),
    PRIMARY KEY (`id_company`),
    UNIQUE KEY (`company`),
    FOREIGN KEY (`id_city`) REFERENCES Cities (`id_city`),
    FOREIGN KEY (`id_user`) REFERENCES Users (`id_user`)
);

CREATE TABLE Contacts(
    `id_contact` INT AUTO_INCREMENT,
    `first_name` VARCHAR (50) NOT NULL,
    `last_name` VARCHAR (50) NOT NULL,
    `position` VARCHAR (50) NOT NULL,
    `id_company` INT NOT NULL,
    `interest` ENUM ('0%', '25%', '50%', '75%', '100%'),
    `id_city` INT NOT NULL,
    PRIMARY KEY (`id_contact`),
    UNIQUE KEY (`first_name`, `last_name`, `id_company`),
    FOREIGN KEY (`id_city`) REFERENCES Cities (`id_city`)
);

CREATE TABLE Contact_channel(
    `id_channel` INT AUTO_INCREMENT,
    `channel` VARCHAR (20),
    PRIMARY KEY (id_channel)
);

CREATE TABLE Contact_preferences(
    `id_preference` INT AUTO_INCREMENT,
    `id_contact` INT NOT NULL,
    `id_channel` INT NOT NULL,
    `account` VARCHAR (50),
    `preference` ENUM ('No utilizar', 'Uso moderado', 'Canal favorito'),
    PRIMARY KEY (`id_preference`),
    UNIQUE KEY (`id_channel`, `id_contact`),
    FOREIGN KEY (`id_contact`) REFERENCES Contacts (`id_contact`),
    FOREIGN KEY (`id_channel`) REFERENCES Contact_channel (`id_channel`)
);
