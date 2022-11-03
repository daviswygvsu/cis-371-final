let Item = require('./Item');

class ItemDB {
    static all ( ) { 
        return this.items;
    }

    static find ( id ) {
        return this.items.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newItem = new Item ( description );
        newItem.id = this.items.length + 1;
        this.items.push ( newItem );
        return newItem;
    }

    static destroy ( id ) {
        this.items.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

ItemDB.items = [];

module.exports = ItemDB;