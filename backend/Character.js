class Character {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this character
            this.name = description.name; // This character's name
            this.portrait = description.portrait; // The filepath or url to an image of this character
            this.game = description.game; // The game that this character exists in
        }
        this.errors = [];
    }

    isValid () {
        // Return false if the character does not have a name
        if(!this.name){
            this.errors.push("Character must have a name!");
        }

        //Return false if the character does not have an assigned game
        if(!this.game){
            this.errors.push("Character does not have an assigned game!");
        }

        return this.errors.length <= 0;
    }
}

class PC extends Character {
    constructor ( description ) {
        if ( description ) {
            super ( description );
            this.level = description.level; // This character's in-game level
            this.xp = description.xp; // The amount of experience this character has
            this.gp = description.gp; // The amount of gold points this character has
            this.user = description.user; // The user playing this character
        }
        this.errors = [];
    }

    isValid () {
        // Return false if PC has level <= 0, and amount of gold or experience < 0, or the PC does not have a user
        if(this.level < 0){
            this.errors.push("Chracter cannot have a negative level!");
        }
        if(this.gp < 0){
            this.errors.push("Character cannot have a negative amount of gold!");
        }
        if(this.xp < 0){
            this.errors.push("Character cannot have a negative amount of xp!");
        }
        if(!this.user){
            this.errors.push("Character must have a user!");
        }
        
        return (this.errors.length <= 0) && super.isValid();
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

module.exports = { PC, NPC };