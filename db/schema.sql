### Schema
CREATE DATABASE rtpc2zo6jrmjs088;
USE rtpc2zo6jrmjs088;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
