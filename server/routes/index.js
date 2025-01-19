const router = require('express').Router();
const componentRouter = require('./components');
const computerRouter = require('./saved_computers');

router.use('/components', componentRouter);
router.use('/saved-computers', computerRouter);

module.exports = router;
