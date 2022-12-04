var sqlite3 = require('sqlite3').verbose();
let Game = require('./Game');

class GameDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Games (id INTEGER PRIMARY KEY, name TEXT NOT NULL, world TEXT, gm INTEGER NOT NULL);`);
            this.db.run(`INSERT INTO Games (name, world, gm) VALUES ("Good Guys", "Ethelia", 1);`);
            this.db.run(`INSERT INTO Games (name, world, gm) VALUES ("Strahd", "Barovia", 2);`);
            this.db.run(`INSERT INTO Games (name, world, gm) VALUES ("Whispered One", "Oerth", 3);`);
        });
    }

    static allGames() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Games`, (err, response) => {
                let arrayRes = response.map(item => new Game(item));
                resolve(arrayRes);
            })
        });
    }

    static myGames(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Games where (gm == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new Game(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Games where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new Game(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            })
        })
    }

    static create(description) {
        let newGame = new Game(description);
        if (newGame.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO Games (name, world, gm) VALUES ("${newGame.name}", "${newGame.world}", "${newGame.gm}")`, 
                    function(err, data) {
                        newGame.id = this.lastID;
                        resolve(newGame);
                    })
            })
        } else {
            return newGame;
        }
    }

    static update(game) {
        this.db.run(`UPDATE Games SET name="${game.name}", world="${game.world}", gm="${game.gm}" where id="${game.id}" `);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM Games WHERE (id == ${id})`);
    }
}

GameDB.db = new sqlite3.Database('games.sqlite');

module.exports = GameDB;