const express = require('express');
const session = require('express-session');
const app = express();

// app.use(session({ }));

app.use(express.json());

app.use('/games', require('./routes/GameRoute'));

app.use('/characters', require('./routes/CharacterRoute'));

app.listen(3001, function() { console.log("Express server is running!"); });