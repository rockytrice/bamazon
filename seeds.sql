USE bamazon;

INSERT INTO products (item_id,product_name,department_name,price,
 stock_quantity)
 values(1,'NBA 2K19','Electronics', 59.96,250);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(2,'Fallout 76','Electronics',59.99, 200);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(3,'Far Cry 5','Electronics',38.99,67);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(4,'Magic Bullet Blender, Small, Silver, 11 Piece Set','Home & Kitchen',35.99,70);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(5,'Every Breath - by Nicholas Sparks','Books',16.80,100);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(6,'A Bend in the Road - by Nicholas Sparks','Books',8.79,300);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(7,'Martin D12X1AE 12-String Acoustic-Electric Guitar','Musical Instruments',679.00,57);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(8,'Martin M190 80/20 Bronze 12-String Acoustic Guitar Strings, Light','Musical Instruments',4.99,300);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(9,'Elama EL-MYSTICWAVES Mystic Waves 16 Piece Dinnerware 16pc set','Home & Kitchen',42.05,37);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(10,'DEWALT DCMW220P2 2X20V Dw Mower Lawn','Garden & Outdoor',399.00, 19);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(11,'Camp Chef Woodwind Pellet Grill with Sear Box - Smart Smoke Technology - Ash Cleanout System','Garden & Outdoor',899.00,47);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
values(12,'Brother HL-L2300D Monochrome Laser Printer with Duplex Printing','Office Products',59.99,12);


SELECT * FROM bamazon.products LIMIT 1000;



 
