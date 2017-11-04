DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (id)
);

select * from Products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Clothing", 55.0, 40 );

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Disney Watch", "Electronics", 14.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Peach Shirt", "Clothing", 15.50, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Towel", "Outdoors", 9.99, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Eye Liner", "Cosmetics", 8.99, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Tooth Brush", "Baths items", 5.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hair Color", "Cosmetics", 9.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Candy", "Foods", 3.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Outdoors", 3.50, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Cookies", "Foods", 5.99, 15);

SELECT * FROM products;
