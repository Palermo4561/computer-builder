const pool = require('../db');

const getComponents = (category) => {
  return async (req, res) => {
    try {
      const result = await pool.query(
        `SELECT * FROM components WHERE category=\'${category}\'`,
      );
      res.status(200).json(result.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send('Bad database access');
    }
  };
};

const getFromId = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM components WHERE id=\'${req.params.id}\'`,
    );
    res.status(200).json(result.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

const postComponent = async (req, res) => {
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
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

module.exports = {
  getCPUs: getComponents('cpu'),
  getGPUs: getComponents('gpu'),
  getMotherboards: getComponents('motherboard'),
  getRAM: getComponents('ram'),
  getStorage: getComponents('storage'),
  getFromId,
  postComponent,
};
