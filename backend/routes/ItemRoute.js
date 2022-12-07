const express = require('express');
let router = express.Router();
let ItemDB = require('../ItemDB');

router.get('/', async (req, res) => {
    res.json({'items' : await ItemDB.all()});
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

module.exports = router;