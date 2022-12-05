var sqlite3 = require('sqlite3').verbose();
let User = require('./User');

class UserDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, password TEXT NOT NULL);`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("Geroge", "George");`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("resin", "resin");`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("WyattDavis22", "2Bsd3793");`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("kilometers", "Miles2613");`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("Amongus", "fortnite");`);
            this.db.run(`INSERT INTO Users (name, password) VALUES ("wwizardly", "Sm0liv3!");`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Users`, (err, response) => {
                let arrayRes = response.map(item => new Game(item));
                resolve(arrayRes);
            })
        });
    }

    static isUser( desc ) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Users where (name == "${desc.name}") AND (password == "${desc.password}")`, (err, rows) => { 
                if (rows.length >= 1) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        });
    }

    static nameToID( name ) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Users where (name == "${name}")`, (err, rows) => { 
                if (rows.length >= 1) {
                    let thisUser = new User(rows[0]);
                    resolve(thisUser.id);
                } else {
                    reject(`User ${name} not found`);
                }
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Users where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new User(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            })
        })
    }

    static create(description) {
        let newUser = new User(description);
        if (newUser.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO Users (name, password) VALUES ("${newUser.name}", "${newUser.password}")`, 
                    function(err, data) {
                        newUser.id = this.lastID;
                        resolve(newUser);
                    })
            })
        } else {
            return newUser;
        }
    }
}

UserDB.db = new sqlite3.Database('users.sqlite');

module.exports = UserDB;