-- 0 Select all products

	-- SELECT * FROM computerstore.products;
	
-- 1 Select the names of all the products in the store.
SELECT name FROM ComputerStore.Products;
-- 2 Select the names and the prices of all the products in the store.
SELECT name, price FROM ComputerStore.Products;
-- 3 Select the name of the products with a price less than or equal to $200.
SELECT name FROM ComputerStore.Products WHERE price <= 200;
-- 4 Select all the products with a price between $60 and $120.
SELECT * FROM ComputerStore.Products WHERE price BETWEEN 60 AND 120;
-- 5 Select the name and price in cents (i.e., the price must be multiplied by 100).
SELECT name, price*100 AS price_in_cents FROM ComputerStore.Products;
-- 6 Select all the products whose name begins with an "DVD"
SELECT * FROM ComputerStore.Products WHERE name LIKE 'DVD%';
-- 7 Select all the products whose name ends with an "e"
SELECT * FROM ComputerStore.Products WHERE name LIKE '%e';
-- 8 Select all the products whose names second letter is "o"
SELECT * FROM ComputerStore.Products WHERE name LIKE '_o%';
-- 9 Compute the average price of all the products.
SELECT AVG(price) AS average_price FROM ComputerStore.Products;
-- 10 Compute the average price of all products with manufacturer code equal to 2.
SELECT AVG(price) AS average_price FROM ComputerStore.Products WHERE manufacturer = 2;
-- 11 Compute the number of products with a price larger than or equal to $180.
SELECT COUNT(*) AS product_count FROM ComputerStore.Products WHERE price >= 180;
-- 12 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).
SELECT name, price FROM ComputerStore.Products WHERE price >= 180 ORDER BY price DESC, name ASC;
