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

router.get('/:id/', async (req, res) => {
    res.json({'game' : await GameDB.find(req.params.id)});
});

router.post('/edit/:id/', async (req, res) => {
    GameDB.update(req.body.game);
});

router.post('/create/', async (req, res) => {
    GameDB.create(req.body.desc);
});

module.exports = router;