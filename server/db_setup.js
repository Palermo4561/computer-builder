require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const schema = fs.readFileSync(
  path.join(__dirname, 'db', 'schema.sql'),
  'utf8',
);
const seed = fs.readFileSync(path.join(__dirname, 'db', 'seed.sql'), 'utf8');

// create client for initialization
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function populate_database() {
  try {
    await client.connect();

    await client.query(schema);
    await client.query(seed);
  } catch (e) {
    console.error(e);
  } finally {
    await client.end();
  }
}
populate_database();
