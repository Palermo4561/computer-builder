const pool = require('../db');

const get_components = (category) => {
  return async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM components WHERE category=\'${category}\'`);
      res.status(200).json(result.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send('Bad database access');
    }
  };
};

module.exports = {
  getCPUs: get_components('cpu'),
  getGPUs: get_components('gpu'),
  getMotherboards: get_components('motherboard'),
  getRAM: get_components('ram'),
  getStorage: get_components('storage'),
};
