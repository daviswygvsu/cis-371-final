const express = require('express');
let router = express.Router();
let { PCDB, NPCDB } = require('../CharacterDB');

router.get('/pcs/', async (req, res) => {
    res.json({'pcs' : await PCDB.all()});
});

router.get('/pcs/mine/:id', async (req, res) => {
    res.json({'pcs' : await PCDB.myPCs(req.params.id)})
});

router.get('/destroy/:user/:id/', async (req, res) => {
    PCDB.destroy(req.params.id);
    res.json({'pcs' : await PCDB.myPCs(req.params.user)});
});

router.get('/pcs/:id/', async (req, res) => {
    res.json({'pc' : await PCDB.find(req.params.id)});
});

router.post('/pcs/edit/:id/', async (req, res) => {
    PCDB.update(req.body.pc);
});

router.get('/npcs', async (req, res) => {
    res.json({'npcs' : await NPCDB.all()});
})

router.get('/npcs/mine/:id', async (req, res) => {
    res.json({'npcs' : await NPCDB.myNPCs(req.params.id)})
});

module.exports = router;