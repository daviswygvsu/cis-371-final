class Quest {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id;
            this.name = description.name;
            this.game = description.game;
            this.level = description.level;
            this.known = description.known;
            this.xp = description.xp;
            this.description = description.description;
        }
        this.errors = [];
    }

    isValid ( ) {
        if (!this.game) {
            this.errors.push("Quest must be assigned to a game.");
        } if (!this.name) {
            this.errors.push("Quest must have some sort of name.");
        } if (!this.level) {
            this.errors.push("Quest must have a level.");
        }

        return this.errors.length <= 0;
    }
}

module.exports = Quest;