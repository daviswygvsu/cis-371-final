class Game {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this game
            this.world = description.world; // The world that this game takes place in
            this.gm = description.gm; // The Game Master of this game
        }
    }
}

module.exports = Game;