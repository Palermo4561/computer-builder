const router = require('express').Router();
const {
  getAll,
  getFullComputer,
} = require('../controllers/saved_computers');

router.get('/', getAll);
router.get('/:id', getFullComputer);

module.exports = router;
