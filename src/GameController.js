const GameDB = require('./GameDB');

exports.index = index = async (res, req) => {
    res.json ( {
        games : await GameDB.allGames()
    })
}