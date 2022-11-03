class World {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this world
            this.map = description.map; // A filepath or URL to the map of this world
        }
    }
}

module.exports = World;