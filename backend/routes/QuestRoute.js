const express = require('express');
let router = express.Router();
let QuestDB = require('../QuestDB');
let UserDB = require('../UserDB');

function isAuthenticated(req, res, next) {

    if (req.session.user) {
        next()
    } else {
        console.log('Not logged in... You dingus')
    }
}

router.get('/:gid', async (req, res) => {
    res.json({'quests' : await QuestDB.myQuests(req.params.gid)});
});

router.get('/known/:gid', async (req, res) => {
    res.json({'quests' : await QuestDB.knownQuests(req.params.gid)});
});

router.get('/find/:id/', async (req, res) => {
    res.json({'quest' : await QuestDB.find(req.params.id)});
});

router.get('/destroy/:gid/:id/', isAuthenticated, async (req, res) => {
    QuestDB.destroy(req.params.id);
    res.json({'quests' : await QuestDB.myQuests(req.params.gid)});
});

router.post('/create/', isAuthenticated, async(req, res) => {
    QuestDB.create(req.body.desc);
});

router.post('/edit/', isAuthenticated, async(req, res) => {
    QuestDB.update(req.body.quest);
});

module.exports = router;