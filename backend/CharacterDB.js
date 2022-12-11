var sqlite3 = require('sqlite3').verbose();
let {PC, NPC } = require('./Character');

class PCDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE PCs (id INTEGER PRIMARY KEY, name TEXT NOT NULL, portrait TEXT NOT NULL, game INTEGER NOT NULL, level INTEGER NOT NULL, xp INTEGER NOT NULL, gp INTEGER NOT NULL, user INTEGER NOT NULL);`);
            this.db.run(`INSERT INTO PCs (name, portrait, game, level, xp, gp, user) VALUES ("Boromir", "my_file.gif", 1, 11, 4000, 47, 1);`);
            this.db.run(`INSERT INTO PCs (name, portrait, game, level, xp, gp, user) VALUES ("Amongus Man", "his_file.png", 2, 12, 6000, 900, 2 );`);
            this.db.run(`INSERT INTO PCs (name, portrait, game, level, xp, gp, user) VALUES ("Krusk the KTerrible", "their_file.png", 3, 15, 15000, 12, 3 );`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from PCs`, (err, response) => {
                let arrayRes = response.map(item => new PC(item));
                resolve(arrayRes);
            })
        });
    }

    static myPCs(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from PCs where (user == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new PC(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from PCs where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new PC(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            });
        });
    }

    static create(description) {
        let newPC = new PC(description);
        if (newPC.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO PCs (name, portrait, game, level, xp, gp, user ) VALUES ("${newPC.name}", "${newPC.portrait}", "${newPC.game}", "${newPC.level}", "${newPC.xp}", "${newPC.gp}", "${newPC.user}" )`, 
                    function(err, data) {
                        newPC.id = this.lastID;
                        resolve(newPC);
                    });
            });
        } else {
            console.log("worked");
            return newPC;
        }
    }

    static update(pc) {
        this.db.run(`UPDATE PCs SET name="${pc.name}", portrait="${pc.portrait}", game="${pc.game}", level="${pc.level}", xp="${pc.xp}", gp="${pc.gp}", user="${pc.user}" where id="${pc.id}" `);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM PCs WHERE (id == ${id});`);
    }
}

class NPCDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE NPCs (id INTEGER PRIMARY KEY, name TEXT NOT NULL, portrait TEXT NOT NULL, game INTEGER NOT NULL, home INTEGER NOT NULL, known INTEGER NOT NULL);`);
            this.db.run(`INSERT INTO NPCs (name, portrait, game, home, known ) VALUES ("Aragorn", "aragorn_businesscasual.jpeg", 1, 1, 0 );`);
            this.db.run(`INSERT INTO NPCs (name, portrait, game, home, known ) VALUES ("Steve from Minecraft", "creeper.png", 2, 2, 1 );`);
            this.db.run(`INSERT INTO NPCs (name, portrait, game, home, known ) VALUES ("Ronald Weasley", "harrysparents.jpeg", 3, 3, 1 );`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from NPCs`, (err, response) => {
                let arrayRes = response.map(item => new NPC(item));
                resolve(arrayRes);
            })
        });
    }

    static myNPCs(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from NPCs where (game == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new NPC(item));
                resolve(arrayRes);
            })
        });
    }

    static knownNPCs(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from NPCs where (game == ${id}) AND (known == 1)`, (err, res) => {
                let arrayRes = res.map(item => new NPC(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from NPCs where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new NPC(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            })
        });
    }

    static create(description) {
        let newNPC = new NPC(description);
        if (newNPC.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO NPCs (name, portrait, game, home, known ) VALUES ("${newNPC.name}", "${newNPC.portrait}", "${newNPC.game}", "${newNPC.home}", "${newNPC.known}" )`, 
                    function(err, data) {
                        newNPC.id = this.lastID;
                        resolve(newNPC);
                    })
            });
        } else {
            return newNPC;
        }
    }

    static update(npc) {
        this.db.run(`UPDATE NPCs SET name="${npc.name}", portrait="${npc.portrait}", game="${npc.game}", home="${npc.home}", known="${npc.known}" where id="${npc.id}" `);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM NPCs WHERE (id == ${id});`);
    }
}

PCDB.db = new sqlite3.Database('pcs.sqlite');

NPCDB.db = new sqlite3.Database('npcs.sqlite');

module.exports = { PCDB, NPCDB };