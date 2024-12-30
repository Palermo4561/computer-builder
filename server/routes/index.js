const router = require('express').Router();
const { getSavedComputers } = require('../controllers/saved_computers');
const components_router = require('./components');

router.get('/saved_computers', getSavedComputers);
router.use('/components', components_router);

module.exports = router;
