CREATE TABLE IF NOT EXISTS Regions (
    `id_region` INT NOT NULL PRIMARY KEY,
    `Region` VARCHAR(150) CHARACTER SET utf8
);
INSERT INTO Regions VALUES
    (1,'East Asia & Pacific',NULL),
    (2,'Europe & Central Asia',NULL),
    (3,'Latin America & Caribbean',NULL),
    (4,'Middle East & North Africa',NULL),
    (5,'North America',NULL),
    (6,'South Asia',NULL),
    (7,'Sub-Saharan Africa',NULL);
