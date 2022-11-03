class Shop {
    constructor ( description ) { 
        if ( description ) { 
            this.id = description.id; // The numeric ID of this shop
            this.inventory = description.inventory; // The items that this shop sells
            this.name = description.name; // The name of this shop
            this.quality = description.quality; // The quality of this shop
            this.town = description.town; // The town where this shop is located
        }
    }
}

module.exports = Shop;