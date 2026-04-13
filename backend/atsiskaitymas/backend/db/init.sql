CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS dishes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL CHECK (price > 0)
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    dish_id INTEGER NOT NULL REFERENCES dishes(id)
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customers (name, email, phone)
VALUES
    ('Bruno', 'bruno@example.com', '37060000001'),
    ('Augustina', 'augustina@example.com', '37068497008');

INSERT INTO dishes (name, description, price)
VALUES
    ('Margherita Pizza', 'Plain pizza', 8.90),
    ('Tofu Salad', 'Delicious salad', 6.50),
    ('Beef Burger', 'Burger comes with fries', 10.90);

INSERT INTO orders (customer_id, status, dish_id)
SELECT c.id, 'pending', d.id
FROM customers c
JOIN dishes d ON d.name = 'Margherita Pizza'
WHERE c.email = 'bruno@example.com';
