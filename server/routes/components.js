const router = require('express').Router();
const {
  getCPUs,
  getGPUs,
  getMotherboards,
  getRAMs,
  getStorages,
  getFromId,
  addComponent,
} = require('../controllers/components');

router.get('/', (req, res) => {
  res.status(404).send('<h1>Please specify the component in the URI</h1>');
});

router.post('/', addComponent);
router.get('/:id', getFromId);

router.get('/cpus', getCPUs);
router.get('/gpus', getGPUs);
router.get('/motherboards', getMotherboards);
router.get('/ram', getRAMs);
router.get('/storage', getStorages);

module.exports = router;
