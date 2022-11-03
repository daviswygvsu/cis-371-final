let Game = require('./Game');

class GameDB {
    static all ( ) { 
        return this.games;
    }

    static find ( id ) {
        return this.games.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newGame = new Game ( description );
        newGame.id = this.games.length + 1;
        this.games.push ( newGame );
        return newGame;
    }

    static destroy ( id ) {
        this.games.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

GameDB.games = [];

module.exports = GameDB;