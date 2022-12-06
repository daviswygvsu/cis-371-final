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

router.post('/create', async (req, res, next) => {
    UserDB.create(req.body.desc);
    console.log("User has signed up!");
});

router.get('/:id', async (req, res) => {
    res.json({'user' : await UserDB.find(req.params.id)});
});

module.exports = router;