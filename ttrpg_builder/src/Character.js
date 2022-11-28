class Character {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this character
            this.name = description.name; // This character's name
            this.portrait = description.portrait; // The filepath or url to an image of this character
            this.game = description.game; // The game that this character exists in
        }
    }

    isValid () {
        // Return true if character has a name
        // Return false if character has no name
    }
}

class PC extends Character {
    constructor ( description ) {
        if ( description ) {
            super ( description );
            this.level = description.level; // This character's in-game level
            this.xp = description.xp; // The amount of experience this character has
            this.gp = description.gp; // The amount of gold points this character has
            this.inventory = description.inventory; // The item's in this player's inventory
            this.user = description.user; // The user playing this character
        }
    }

    isValid () {
        // Return true if PC has level > 0, an amount of gold and experience >= 0, and the PC has a user
        // Return false if PC has level <= 0, and amount of gold or experience < 0, or the PC does not have a user
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

    isValid () {
        return super.isValid();
    }
}

module.exports = { Character, PC, NPC };