DROP DATABASE IF EXISTS bamazon;

/* Create database */
CREATE DATABASE bamazon;
USE bamazon;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,    
  price DECIMAL(10,4) NULL,
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);
