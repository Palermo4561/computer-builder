const pool = require('../db');

const getAllSavedComputers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM saved_computers');
    res.status(200).json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

async function getFromId(database, id) {
  try {
    const result = await pool.query(`SELECT * FROM ${database} WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (e) {
    console.error(e);
  }
}

const getSavedComputer = async (req, res) => {
  try {
    const computer = await getFromId('saved_computers', req.params.id);

    const components = ['cpu', 'gpu', 'motherboard', 'ram', 'storage'];
    const result = Object.fromEntries(
      await Promise.all(
        components.map(async (item) => [
          item,
          await getFromId('components', computer?.[item]),
        ]),
      ),
    );

    res.status(200).json({ computerName: computer.name, ...result });
  } catch (e) {
    console.error(e);
    res.status(500).send('Bad database access');
  }
};

module.exports = { getAllSavedComputers, getSavedComputer };
