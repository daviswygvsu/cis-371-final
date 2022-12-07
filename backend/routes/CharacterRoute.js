const express = require('express');
let router = express.Router();
let { PCDB, NPCDB } = require('../CharacterDB');
let UserDB = require('../UserDB');

function isAuthenticated(req, res, next) {

    if (req.session.user) {
        next()
    } else {
        console.log('Not logged in... You dingus')
    }
}

router.get('/pcs/', async (req, res) => {
    res.json({'pcs' : await PCDB.all()});
});

router.get('/pcs/mine/', isAuthenticated, async (req, res) => {
    res.json({'pcs' : await PCDB.myPCs(await UserDB.nameToID(req.session.user))});
});

router.get('/destroy/:id/',isAuthenticated, async (req, res) => {
    PCDB.destroy(req.params.id);
    res.json({'pcs' : await PCDB.myPCs(await UserDB.nameToID(req.session.user))});
});

router.get('/destroy/:game/:id/', isAuthenticated, async (req, res) => {
    NPCDB.destroy(req.params.id);
    res.json({'npcs' : await NPCDB.myNPCs(req.params.game)});
});

router.get('/pcs/:id/', async (req, res) => {
    res.json({'pc' : await PCDB.find(req.params.id)});
});

router.post('/pcs/edit/:id/', isAuthenticated, async (req, res) => {
    PCDB.update(req.body.pc);
});

router.post('/pcs/create/', isAuthenticated, async (req, res) => {
    let newDesc = {name : req.body.desc.name, portrait : req.body.desc.portrait, game : req.body.desc.game, level : req.body.desc.level, xp : req.body.desc.xp , gp : req.body.desc.gp, user : await UserDB.nameToID(req.session.user) }
    PCDB.create(newDesc);
});

router.get('/npcs', async (req, res) => {
    res.json({'npcs' : await NPCDB.all()});
});

router.get('/npc/:id/', isAuthenticated, async(req, res) => {
    res.json({'npc': await NPCDB.find(req.params.id)});
});

router.get('/npcs/:id/', isAuthenticated, async (req, res) => {
    res.json({'npcs' : await NPCDB.myNPCs(req.params.id)})
});

router.post('/npcs/create/', isAuthenticated, async (req, res) => {
    NPCDB.create(req.body.desc);
});

router.post('/npcs/edit/', isAuthenticated, async(req, res) => {
    NPCDB.update(req.body.npc);
});

module.exports = router;