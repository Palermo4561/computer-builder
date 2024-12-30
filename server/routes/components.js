const router = require('express').Router();
const {
  getCPUs,
  getGPUs,
  getMotherboards,
  getRAM,
  getStorage,
} = require('../controllers/components');

router.get('/', (req, res) => {
  res.status(404).send('<h1>Please specify the component in the URI</h1>');
});

router.get('/cpus', getCPUs);
router.get('/gpus', getGPUs);
router.get('/motherboards', getMotherboards);
router.get('/ram', getRAM);
router.get('/storage', getStorage);

module.exports = router;
