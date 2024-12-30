const pool = require('../db');

const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

module.exports = { getUsers };