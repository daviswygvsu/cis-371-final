const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({ 
    secret: "amongusfortnite",
    saveUninitialized: false,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}));

app.use(express.json());

app.use('/games', require('./routes/GameRoute'));

app.use('/characters', require('./routes/CharacterRoute'));

app.use('/users', require('./routes/UserRoute'));

app.use('/items', require('./routes/ItemRoute'));

app.listen(3001, function() { console.log("Express server is running!"); });