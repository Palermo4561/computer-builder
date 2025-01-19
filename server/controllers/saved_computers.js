const pool = require('../db');

// get all saved computers 
const getAll = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM saved_computers');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Bad database access');
  }
};

// get from database the row with specified id
async function getFromId(database, id) {
  try {
    const result = await pool.query(`SELECT * FROM ${database} WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
}

// get ids of the computer components from specific saved computer id
const getFullComputer = async (req, res) => {
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
  } catch (err) {
    console.error(err);
    res.status(500).send('Bad database access');
  }
};

module.exports = { getAll, getFullComputer };
