var sqlite3 = require('sqlite3').verbose();
let Quest = require('./Quest');

class QuestDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Quests (id INTEGER PRIMARY KEY, name TEXT NOT NULL, game INTEGER NOT NULL, level INTEGER NOT NULL, xp INTEGER NOT NULL, known INTEGER NOT NULL, description TEXT);`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Lost Dog", 1, 1, 0, 10, "A child has lost his dog near the woods");`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Dragon Problem", 2, 5, 0, 100, "A dragon is attacking a nearby city");`);
            this.db.run(`INSERT INTO Quests (name, game, level, known, xp, description) VALUES ("Roar of the Tarrasque", 3, 20, 0, 100000, "A tarrasque is terrorizing the land");`);
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
                        newQuest.id = this.lastID;
                        resolve(newQuest);
                    })
            })
        } else {
            return newQuest;
        }
    }

    static update(quest) {
        this.db.run(`UPDATE Quests SET name="${quest.name}", game="${quest.game}", level="${quest.level}", known="${quest.known}", xp="${quest.xp}", description="${quest.description}" where id="${quest.id}" `);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM Quests WHERE (id == ${id})`);
    }
}

QuestDB.db = new sqlite3.Database('quests.sqlite');

module.exports = QuestDB;