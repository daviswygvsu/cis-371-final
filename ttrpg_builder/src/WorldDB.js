let World = require('./World');

class WorldDB {
    static all ( ) { 
        return this.worlds;
    }

    static find ( id ) {
        return this.worlds.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newWorld = new World ( description );
        newWorld.id = this.worlds.length + 1;
        this.worlds.push ( newWorld );
        return newWorld;
    }

    static destroy ( id ) {
        this.worlds.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

WorldDB.worlds = [];

module.exports = WorldDB;