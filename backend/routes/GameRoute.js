const express = require('express');
let router = express.Router();
let GameDB = require('../GameDB');

router.get('/', async (req, res) => {
    res.json({'games' : await GameDB.allGames()});
});

module.exports = router;