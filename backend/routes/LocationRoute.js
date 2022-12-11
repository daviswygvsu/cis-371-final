const express = require('express');
let router = express.Router();
let LocationDB = require('../LocationDB');
let UserDB = require('../UserDB');

function isAuthenticated(req, res, next) {

    if (req.session.user) {
        next()
    } else {
        console.log('Not logged in... You dingus')
    }
}

router.get('/:gid', async (req, res) => {
    res.json({'locations' : await LocationDB.myLocations(req.params.gid)});
});

router.get('/known/:gid', async (req, res) => {
    res.json({'locations' : await LocationDB.knownLocations(req.params.gid)});
});

router.get('/find/:id/', async (req, res) => {
    res.json({'location' : await LocationDB.find(req.params.id)});
});

router.get('/destroy/:gid/:id/', isAuthenticated, async (req, res) => {
    LocationDB.destroy(req.params.id);
    res.json({'locations' : await LocationDB.myLocations(req.params.gid)});
});

router.post('/create/', isAuthenticated, async(req, res) => {
    LocationDB.create(req.body.desc);
});

router.post('/edit/', isAuthenticated, async(req, res) => {
    LocationDB.update(req.body.location);
});

module.exports = router;