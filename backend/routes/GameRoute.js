const express = require('express');
router = express.Router();
GameController = require('../src/GameController');

router.get('/', GameController.index);

module.exports = router;