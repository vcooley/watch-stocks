const router = require('express').Router();
const controller = require('./stock.controller');

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
