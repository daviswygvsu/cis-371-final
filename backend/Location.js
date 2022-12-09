class Location {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id;
            this.name = description.name;
            this.map = description.map;
            this.game = description.game;
            this.known = description.known;
        }
        this.errors = [];
    }

    isValid ( ) {
        if (!this.game) {
            this.errors.push("Location must be assigned to a game.");
        } if (!this.name) {
            this.errors.push("Location must have some sort of name.");
        }

        return this.errors.length <= 0;
    }
}

module.exports = Location;