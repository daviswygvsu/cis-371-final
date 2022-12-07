var sqlite3 = require('sqlite3').verbose();
let Item = require('./Item');

class ItemDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Items (id INTEGER PRIMARY KEY, name TEXT NOT NULL, owner INTEGER NOT NULL, value INTEGER NOT NULL, desc TEXT NOT NULL);`);
            this.db.run(`INSERT INTO Items (name, owner, value, desc) VALUES ("Sword of Truth", 5, 100, "big sowrd");`);
            this.db.run(`INSERT INTO Items (name, owner, value, desc) VALUES ("Fortnite: Boogie Bomb", 6, 10000, "make your enemies do a silly lil irish jig XD");`);
            this.db.run(`INSERT INTO Items (name, owner, value, desc) VALUES ("Slightly Used Hamburger", 7, 2, "found on facebook marketplace");`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Items`, (err, response) => {
                let arrayRes = response.map(item => new Item(item));
                resolve(arrayRes);
            })
        });
    }

    static myItems(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Items where (owner == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new Item(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Items where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new Item(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            });
        });
    }

    static create(description) {
        let newItem = new Item(description);
        if (newItem.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO Items (name, owner, value, desc) VALUES ("${newItem.name}","${newItem.owner}", "${newItem.value}", "${newItem.desc}")`, 
                    function(err, data) {
                        newItem.id = this.lastID;
                        resolve(newItem);
                    });
            });
        } else {
            return newItem;
        }
    }

    static update(item) {
        this.db.run(`UPDATE Items SET name="${item.name}", owner="${item.owner}", value="${item.value}", desc="${item.desc}" where id="${item.id}"`);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM Items WHERE (id == ${id});`);
    }
}

ItemDB.db = new sqlite3.Database('items.sqlite');

module.exports = ItemDB;