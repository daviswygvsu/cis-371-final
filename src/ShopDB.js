let Shop = require('./Shop');

class ShopDB {
    static all ( ) { 
        return this.shops;
    }

    static find ( id ) {
        return this.shops.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newShop = new Shop ( description );
        newShop.id = this.shops.length + 1;
        this.shops.push ( newShop );
        return newShop;
    }

    static destroy ( id ) {
        this.shops.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

ShopDB.shops = [];

module.exports = ShopDB;