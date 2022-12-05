const express = require('express');
const { reset } = require('nodemon');
let router = express.Router();
let UserDB = require('../UserDB');

router.post('/login', async (req, res, next) => {
    let correctLogin = await UserDB.isUser(req.body.desc);

    if (correctLogin) {
        req.session.regenerate((err) => {
            if (err) next (err)
            req.session.user = req.body.desc.name
            next()
        })
    } else {
        // Tell the frontend that login was unsuccessful
    }
});

module.exports = router;