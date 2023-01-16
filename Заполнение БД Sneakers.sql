USE sneakers;
DELETE FROM sneakers.sneakers WHERE id>0;

INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
("Air Jordan 1 Retro High 'University Blue'",'Мужксая обувь','http://localhost/Lab4/images/sneaker1.png',49499);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
('Nike Air Max Terrascape 90','Обувь для скейтборда','http://localhost/Lab4/images/sneaker2.png',17499);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
('Nike Blazer Mid Vintage Edition','Мужская обувь','http://localhost/Lab4/images/sneaker3.png',6799);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
("Nike Air Jordan 1 Low Elevate 'University Blue'",'Мужская обувь','http://localhost/Lab4/images/sneaker4.png',12399);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
('ordan 1 Mid Elephant Toe','Мужская обувь','http://localhost/Lab4/images/sneaker5.png',12399);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
("Nike Cosmic Unity 2 'Coconut Milk'",'Мужская обувь','http://localhost/Lab4/images/sneaker6.png',12399);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
('Nike Air Max 97','Мужская обувь','http://localhost/Lab4/images/sneaker7.png',12399);
INSERT INTO sneakers.sneakers
(`title`,`description`,`imageUrl`,`price`)
VALUES
('Nike Challenger OG','Мужская обувь','http://localhost/Lab4/images/sneaker8.png',12399);

SELECT * FROM sneakers