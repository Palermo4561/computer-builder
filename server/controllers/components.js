const pool = require('../db');

// returns the GET function for a specified component
const getFromCategory = (category) => {
  return async (req, res) => {
    try {
      const result = await pool.query(
        `SELECT * FROM components WHERE category = $1`, 
        [category]
      );
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Bad database access');
    }
  };
};

// gets a specific component from its unique id
const getFromId = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM components WHERE id = $1`,
      [req.params.id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Bad database access');
  }
};

// adds a new component to the database
const addComponent = async (req, res) => {
  try {
    const component = req.body;
    await pool.query(
      'INSERT INTO components (category, name, price, details, socket) VALUES ($1, $2, $3, $4, $5)',
      [
        component.category,
        component.name,
        component.price,
        component.details,
        component.socket,
      ],
    );
    res.status(200).send('Added ');
  } catch (err) {
    console.error(err);
    res.status(500).send('Bad database access');
  }
};

module.exports = {
  getCPUs: getFromCategory('cpu'),
  getGPUs: getFromCategory('gpu'),
  getMotherboards: getFromCategory('motherboard'),
  getRAMs: getFromCategory('ram'),
  getStorages: getFromCategory('storage'),
  getFromId,
  addComponent,
};
