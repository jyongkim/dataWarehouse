CREATE DATABASE IF NOT EXISTS Data_Warehouse;
USE Data_Warehouse;

CREATE TABLE Roles (
    'id_role' INT AUTO_INCREMENT,
    'role' VARCHAR,
);

CREATE TABLE Users(
    'id_user' INT AUTO_INCREMENT,
    'id_role' INT NOT NULL,
    'user_name' VARCHAR (20) NOT NULL,
    'name' VARCHAR (50),
    'password' VARCHAR (20) NOT NULL,
    'email' VARCHAR (100) NOT NULL,
    PRIMARY KEY ('id_user'),
    UNIQUE KEY ('user_name'),
    UNIQUE KEY ('email'),
    FOREIGN KEY ('id_role') Roles ('id_role')
);

CREATE TABLE Companies(
    'id_company' INT AUTO_INCREMENT,
    'company' VARCHAR (100) NOT NULL,
    'id_country' INT NOT NULL,
    'address' VARCHAR (100),
    PRIMARY KEY ('id_company'),
    UNIQUE KEY ('company')
);

CREATE TABLE Contacts(
    'id_contact' INT AUTO_INCREMENT,
    'first_name' VARCHAR (50) NOT NULL,
    'last_name' VARCHAR (50) NOT NULL,
    'position' VARCHAR (50) NOT NULL,
    'id_company' INT NOT NULL,
    'contact_channel' SET('whatsapp','facebook','instagram','linkedin','twitter', 'phone', 'email'),
    'id_city' INT NOT NULL,
    PRIMARY KEY ('id_contact'),
    UNIQUE KEY ('first_name', 'last_name', 'id_company'),
    FOREIGN KEY ('id_city') REFERENCES Cities ('id_city')
);
