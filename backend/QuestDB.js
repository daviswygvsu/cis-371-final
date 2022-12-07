var sqlite3 = require('sqlite3').verbose();
let Quest = require('./Quest');

class GameDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Quests (id INTEGER PRIMARY KEY, name TEXT NOT NULL, game INTEGER NOT NULL, level INTEGER NOT NULL, known INTEGER NOT NULL, description TEXT);`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Lost Dog", 1, 1, 10, 0, "A child has lost his dog near the woods");`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Dragon Problem", 2, 5, 100, 0, "A dragon is attacking a nearby city");`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Roar of the Tarrasque", 3, 20, 10000, 0, "A tarrasque is terrorizing the land");`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Quests`, (err, response) => {
                let arrayRes = response.map(item => new Quest(item));
                resolve(arrayRes);
            })
        });
    }

    static myQuests(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Quests where (game == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new Quest(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Quests where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new Quest(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            })
        });
    }

    static create(description) {
        let newQuest = new Quest(description);
        if (newQuest.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("${newQuest.name}", "${newQuest.game}", "${newQuest.level}", "${newQuest.known}", "${newQuest.xp}", "${newQuest.description}")`, 
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