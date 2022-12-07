const express = require('express');
let router = express.Router();
let ItemDB = require('../ItemDB');

router.get('/', async (req, res) => {
    res.json({'items' : await ItemDB.all()});
});

router.get('/:user/', async (req, res) => {
    res.json({'items' : await ItemDB.myItems(req.params.user)});
});

router.get('/:id/', async (req, res) => {
    res.json({'item' : await ItemDB.find(req.params.id)});
});

router.post('/create/', async (req, res) => {
    ItemDB.create(req.body.desc);
});

router.post('/edit/', async (req, res) => {
    ItemDB.update(req.body.item);
});

router.get('/destroy/:id/', async (req, res) => {
    ItemDB.destroy(req.params.id);
    res.json({'items' : await ItemDB.all()});
});

module.exports = router;