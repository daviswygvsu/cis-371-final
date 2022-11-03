let { Character, PC, NPC } = require ( './Character' );

class PCDB { 
    static all ( ) {
        return this.pcs;
    }

    static find ( id ) {
        return this.pcs.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newPC = new PC ( description );
        newPC.id = this.pcs.length + 1;
        this.pcs.push ( newPC );
        return newPC;
    }

    static destroy ( id ) {
        this.pcs.splice( id - 1, 1 );
        return;
    }

    static update ( id ) { }
}

class NPCDB { 
    static all ( ) {
        return this.npcs;
    }
    
    static find ( id ) {
        return this.npcs.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newNPC = new NPC ( description );
        newNPC.id = this.npcs.length + 1;
        this.npcs.push ( newNPC );
        return newNPC;
    }

    static destroy ( id ) {
        this.npcs.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }
}

PCDB.pcs = [];
NPCDB.npcs = [];

module.exports = { PCDB, NPCDB };