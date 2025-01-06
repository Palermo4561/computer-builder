const router = require('express').Router();
const {
  getAllSavedComputers,
  getSavedComputer,
} = require('../controllers/saved_computers');
const components_router = require('./components');

router.get('/saved-computers', getAllSavedComputers);
router.get('/saved-computers/:id', getSavedComputer);
router.use('/components', components_router);

module.exports = router;
