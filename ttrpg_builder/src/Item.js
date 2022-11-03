class Item {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this item
            this.name = description.name; // The name of this item
            this.cost = description.cost; // The cost of the item
            this.description = description.description; // A description of the item
            this.quantity = description.quantity; // The quantity of this item owned by owner
        }
    }
}

module.exports = Item;