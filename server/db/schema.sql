-- create components table 
DROP TABLE IF EXISTS components; 
CREATE TABLE components (
id SERIAL PRIMARY KEY, 
category VARCHAR(20) NOT NULL,
CHECK (category IN ('cpu', 'gpu', 'motherboard', 'ram', 'storage')),
name VARCHAR(100) NOT NULL,
price NUMERIC(10, 2) NOT NULL, 
details TEXT, 
socket VARCHAR(10) DEFAULT NULL
);

-- create saved_computers table
DROP TABLE IF EXISTS saved_computers; 
CREATE TABLE saved_computers (
id SERIAL PRIMARY KEY, 
name VARCHAR(100) DEFAULT 'unnamed',
cpu INTEGER, 
gpu INTEGER, 
motherboard INTEGER, 
ram INTEGER, 
storage INTEGER
);