var sqlite3 = require('sqlite3').verbose();
let Location = require('./Location');

class LocationDB {
    static initialize() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Locations (id INTEGER PRIMARY KEY, name TEXT NOT NULL, game INTEGER NOT NULL, map TEXT, known INTEGER NOT NULL);`);
            this.db.run(`INSERT INTO Locations (name, game, map, known) VALUES ("Adrien", 1, "adrien.png", 1);`);
            this.db.run(`INSERT INTO Locations (name, game, map, known) VALUES ("Barov Village", 2, "barov.jpeg", 1);`);
            this.db.run(`INSERT INTO Locations (name, game, map, known) VALUES ("Pradzia", 3, "prad.png", 0);`);
        });
    }

    static all() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Locations`, (err, response) => {
                let arrayRes = response.map(item => new Location(item));
                resolve(arrayRes);
            })
        });
    }

    static myLocations(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Locations where (game == ${id})`, (err, res) => {
                let arrayRes = res.map(item => new Location(item));
                resolve(arrayRes);
            })
        });
    }

    static knownLocations(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Locations where (game == ${id}) AND (known == 1)`, (err, res) => {
                let arrayRes = res.map(item => new Location(item));
                resolve(arrayRes);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * from Locations where (id == ${id})`, (err, rows) => {
                if (rows.length >= 1) {
                    resolve(new Location(rows[0]));
                } else {
                    reject(`ID ${id} not found`);
                }
            })
        });
    }

    static create(description) {
        let newLocation = new Location(description);
        if (newLocation.isValid()) {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO Locations (name, game, map, known) VALUES ("${newLocation.name}", "${newLocation.game}", "${newLocation.map}", "${newLocation.known}")`, 
                    function(err, data) {
                        newLocation.id = this.lastID;
                        resolve(newLocation);
                    })
            })
        } else {
            return newLocation;
        }
    }

    static update(location) {
        this.db.run(`UPDATE Locations SET name="${location.name}", game="${location.game}", map="${location.map}", known="${location.known}" where id="${location.id}" `);
    }

    static destroy(id) {
        this.db.run(`DELETE FROM Locations WHERE (id == ${id})`);
    }
}

LocationDB.db = new sqlite3.Database('locations.sqlite');

module.exports = LocationDB;