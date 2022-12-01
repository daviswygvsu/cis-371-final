const express = require('express');
let router = express.Router();
let GameDB = require('../GameDB');

router.get('/', async (req, res) => {
    res.json({'games' : await GameDB.allGames()});
});

router.post('/destroy/', async (req, res) => {
    console.log('We should be deleting something');
});

router.post('/edit/', async (req, res) => {
    console.log('We should be editing something');
});

module.exports = router;