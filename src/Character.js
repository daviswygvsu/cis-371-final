class Character {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this character
            this.name = description.name; // This character's name
            this.portrait = description.portrait; // The filepath or url to an image of this character
            this.game = description.game; // The game that this character exists in
        }
    }
}

class PC extends Character {
    constructor ( description ) {
        if ( description ) {
            super ( description );
            this.level = description.level; // This character's in-game level
            this.qxp = description.qxp; // The amount of quest experience this character has
            this.gp = description.gp; // The amount of gold points this character has
            this.inventory = description.inventory; // The item's in this player's inventory
            this.user = description.user; // The user playing this character
        }
    }
}

class NPC extends Character {
    constructor ( description ) {
        if ( description ) {
            super ( description );
            this.home = description.home; // The place where this NPC typically resides
            this.known = description.known; // Whether or not this character is known by the party
        }
    }
}

module.exports = { Character, PC, NPC };