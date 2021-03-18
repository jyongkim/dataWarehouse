CREATE TABLE Regions (
	id_region INT AUTO_INCREMENT,
    region VARCHAR (100),
	PRIMARY KEY (id_region),
    UNIQUE KEY (region)
);
INSERT INTO Regions (region)
VALUES
	('East Asia & Pacific'),
	('Europe & Central Asia'),
	('Latin America & Caribbean'),
	('Middle East & North Africa'),
	('North America'),
	('South Asia'),
	('Sub-Saharan Africa');