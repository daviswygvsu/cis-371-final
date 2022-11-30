const express = require('express');
let router = express.Router();
let { PCDB, NPCDB } = require('../CharacterDB');

router.get('/pcs', async (req, res) => {
    res.json({'pcs' : await PCDB.all()});
});

router.get('/npcs', async (req, res) => {
    res.json({'npcs' : await NPCDB.all()});
})

module.exports = router;