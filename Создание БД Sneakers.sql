DROP DATABASE IF EXISTS  sneakers;
CREATE DATABASE sneakers;

USE sneakers;
DROP TABLE IF EXISTS  sneakers;
CREATE TABLE sneakers
(
  `title` varchar
(255) DEFAULT NULL,
  `description` varchar
(255) DEFAULT NULL,
  `imageUrl` varchar
(255) DEFAULT NULL,
  `price` DOUBLE DEFAULT NULL,
  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
  KEY `id`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



