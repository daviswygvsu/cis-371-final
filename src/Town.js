class Town {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier of this town
            this.world = description.world; // The world where this town is located
        }
    }
}

module.exports = Town;