const pool = require('../db');

const getSavedComputers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM saved_computers');
    res.status(200).json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

module.exports = { getSavedComputers };
