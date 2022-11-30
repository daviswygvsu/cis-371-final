let { Character, PC, NPC } = require()

class PCDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE PCs (id INTEGER PRIMARY KEY, ...);`);
            this.db.run(`INSERT INTO PCs ( ) VALUES ( );`);
            this.db.run(`INSERT INTO PCs ( ) VALUES ( );`);
            this.db.run(`INSERT INTO PCs ( ) VALUES ( );`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from PCs`, (err, response) => {
                let arrayRes = response.map(item => new PC(item));
                resolve(arrayRes);
            });
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
                this.db.run(`INSERT INTO PCs ( ) VALUES ( )`, 
                    function(err, data) {
                        newPC.id = this.lastID;
                        resolve(newPC);
                    });
            });
        } else {
            return newPC;
        }
    }

    static update(pc) {
        this.db.run(`UPDATE PCs SET ... where id="${pc.id}`);
    }
}

class NPCDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE NPCs (id INTEGER PRIMARY KEY, ...);`);
            this.db.run(`INSERT INTO NPCs ( ) VALUES ( );`);
            this.db.run(`INSERT INTO NPCs ( ) VALUES ( );`);
            this.db.run(`INSERT INTO NPCs ( ) VALUES ( );`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from NPCs`, (err, response) => {
                let arrayRes = response.map(item => new NPC(item));
                resolve(arrayRes);
            });
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
            });
        });
    }

    static create(description) {
        let newNPC = new NPC(description);
        if (newNPC.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO PCs ( ) VALUES ( )`, 
                    function(err, data) {
                        newNPC.id = this.lastID;
                        resolve(newNPC);
                    });
            });
        } else {
            return newNPC;
        }
    }

    static update(npc) {
        this.db.run(`UPDATE PCs SET ... where id="${npc.id}`);
    }
}

PCDB.db, NPCDB.db = new sqlite3.Database('characters.sqlite');

module.exports = { PCDB, NPCDB };