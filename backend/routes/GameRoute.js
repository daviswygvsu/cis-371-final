const express = require('express');
const { reset } = require('nodemon');
let router = express.Router();
let GameDB = require('../GameDB');

router.get('/', async (req, res) => {
    res.json({'games' : await GameDB.allGames()});
});

router.get('/destroy/:id/', async (req, res) => {
    GameDB.destroy(req.params.id);
    res.json({'games' : await GameDB.allGames()});
});

router.get('/edit/:id/', async (req, res) => {
    console.log('We should be editing something');
    res.json({'games' : await GameDB.allGames()});
});

module.exports = router;