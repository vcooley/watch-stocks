const router = require('express').Router();
const controller = require('./room.controller');

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
