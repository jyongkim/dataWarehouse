INSERT INTO Roles (`Role`) VALUES
('Admin'), ('Manager'), ('user'), ('Guest');

INSERT INTO Users (`id_role`, `user_name`, `name`, `password`, `email`) VALUES
(1, 'jonathan1', 'Jonathan Kim 1', '1234', 'jonathan1@jk.com'),
(2, 'jonathan2', 'Jonathan Kim 2', '1234', 'jonathan2@jk.com'),
(3, 'jonathan3', 'Jonathan Kim 3', '1234', 'jonathan3@jk.com'),
(4, 'jonathan4', 'Jonathan Kim 4', '1234', 'jonathan4@jk.com');

INSERT INTO Companies (`id_user`, `company`, `id_city`) VALUES 
(1, 'Camelot', 7308),
(1, 'Kimochi', 7308),
(1, 'Pepe', 7308),
(2, 'Lala', 7308),
(3, 'Umbrella', 7308),
(4, 'Mordor', 7308),
(4, 'Misty Mountain', 7308);

INSERT INTO Contacts (`first_name`, `last_name`, `position`, `id_company`, `interest`, `id_city`) VALUES 
('Marcelo', 'Tinelli', 'Employee', 1, 3, 7308),
('Mirtha', 'Legrand', 'Employee', 2, 3, 7308),
('Adrián', 'Suar', 'Employee',3, 3, 7308),
('Hugo', 'Sofovich', 'Employee', 4, 3, 7308),
('Isabel', 'II', 'Employee',5, 3, 7308),
('Harry', 'Potter', 'Employee',6, 3, 7308),
('Gandalf', 'The White', 'Employee', 7, 3, 7308);

INSERT INTO Contact_channel (`channel`) VALUES 
('instagram'), ('facebook'),  ('twitter'), ('whatsapp'), ('linkedin'), ('github'), ('email'), ('phone');

INSERT INTO Contact_preferences (`id_contact`, `id_channel`, `account`, `preference`) VALUES
(1, 7, 'a@a.com', 2),
(2, 8, '+549111115555', 2),
(3, 1, '@jojo', 3),
(4, 1, '@rabbit', 3),
(5, 4, '+549115555111', 2),
(6, 4, '+549115555112', 2),
(7, 6, 'jyongkim', 1);