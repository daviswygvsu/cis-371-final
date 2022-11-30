const express = require('express');
const app = express();

app.use('/games', require('./routes/GameRoute'));

app.listen(3001, function() {
    console.log("Express server is running!");
});