class Game {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this game
            this.name = description.name; // The title of this game
            this.world = description.world; // The world that this game takes place in
            this.gm = description.gm; // The Game Master of this game
        }
        this.errors = [];
    }

    isValid ( ) {
        if (!this.gm) {
            this.errors.push("Game must be assigned a Game Master.");
        } 
        if (!this.name) {
            this.errors.push("Game must be given some sort of name.")
        }

        return this.errors.length <= 0;
    }
}

module.exports = Game;