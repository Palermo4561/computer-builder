-- create components table 
DROP TABLE IF EXISTS components; 
CREATE TABLE components (
id SERIAL PRIMARY KEY, 
category INTEGER, 
name VARCHAR(100),
price NUMERIC, 
details VARCHAR(500), 
socket INTEGER DEFAULT 0
);

--create saved_computers table
DROP TABLE IF EXISTS saved_computers; 
CREATE TABLE saved_computers (
id INTEGER PRIMARY KEY, 
cpu INTEGER, 
gpu INTEGER, 
motherboard INTEGER, 
ram INTEGER, 
storage INTEGER
);