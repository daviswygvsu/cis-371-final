const GameDB = require('./GameDB');

exports.index = (res, req) => {
    res.json({'games' : GameDB.allGames()});
}