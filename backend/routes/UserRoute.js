const express = require('express');
const { reset } = require('nodemon');
let router = express.Router();
let UserDB = require('../UserDB');

router.post('/login', async (req, res) => {
    console.log( await UserDB.isUser(req.body.desc) );
});

module.exports = router;