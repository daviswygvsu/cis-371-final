let Town = require('./Town');

class TownDB {
    static all ( ) { 
        return this.towns;
    }

    static find ( id ) {
        return this.towns.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newTown = new Town ( description );
        newTown.id = this.towns.length + 1;
        this.towns.push ( newTown );
        return newTown;
    }

    static destroy ( id ) {
        this.towns.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

TownDB.towns = [];

module.exports = TownDB;