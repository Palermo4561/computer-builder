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

module.exports = {
  getCPUs: getComponents('cpu'),
  getGPUs: getComponents('gpu'),
  getMotherboards: getComponents('motherboard'),
  getRAM: getComponents('ram'),
  getStorage: getComponents('storage'),
  getFromId,
};
