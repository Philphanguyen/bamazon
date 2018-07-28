DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("bk7804", "StarShip Troopers", "Books", 10, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("bk1086", "A Match Made in Space", "Books", 20, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("mv3005", "Summer Wars", "Movies", 25, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("mv5044", "Super 8", "Movies", 25, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("tg2508", "Yakuza Kiwami", "Games", 20, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("tg6395", "Nier Automata", "Games", 20, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("tg6395", "Star Wars U-wing", "Toys", 80, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("tg0724", "Pokemon Evee Ditto", "Toys", 40, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("sy0724", "Sony Blu Ray Player", "Electronics", 65, 70);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("sy5272", "Nintendo Gameboy", "Electronics", 90, 1);

SELECT * FROM products;