class Item {
    constructor (description ) {
        if (description ){
            this.id = description.id;
            this.name = description.name;
            this.owner = description.owner;
            this.value = description.value;
            this.desc = description.desc;
        }
        this.errors = [];
    }

    isValid () {
        //Return false if item does not have a name
        if(!this.name){
            this.errors.push("Item must have a name!");
        }

        //Return false if item does not have an owner
        if(!this.owner){
            this.errors.push("Item must have a owner!");
        }

        //Return false if item has negative value
        if(this.value < 0){
            this.errors.push("Item cannot have negative value!");
        }

        //Return false if there is no description
        if(!this.desc){
            this.errors.push("Item must have a description!");
        }

        return this.errors.length <= 0;
    }
}

module.exports = Item;