const express = require('express');
const { reset } = require('nodemon');
let router = express.Router();
let GameDB = require('../GameDB');
let UserDB = require('../UserDB');

function isAuthenticated(req, res, next) {

    if (req.session.user) {
        next()
    } else {
        console.log('Not logged in... You dingus')
    }
}

router.get('/', async (req, res) => {
    res.json({'games' : await GameDB.allGames()});
});

router.get('/mine/', isAuthenticated, async (req, res) => {
    res.json({'games' : await GameDB.myGames(await UserDB.nameToID(req.session.user))})
});

router.get('/destroy/:id/', isAuthenticated, async (req, res) => {
    GameDB.destroy(req.params.id);
    res.json({'games' : await GameDB.myGames(await UserDB.nameToID(req.session.user))});
});

router.get('/:id/', async (req, res) => {
    res.json({'game' : await GameDB.find(req.params.id)});
});

router.post('/edit/:id/', async (req, res) => {
    GameDB.update(req.body.game);
});

router.post('/create/', isAuthenticated, async (req, res) => {
    let newDesc = {name : req.body.desc.name, world : req.body.desc.world, gm : await UserDB.nameToID(req.session.user) }
    GameDB.create(newDesc);
});

module.exports = router;