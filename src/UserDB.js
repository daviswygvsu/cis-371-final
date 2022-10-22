let User = require('./User');

class UserDB {
    static all ( ) { 
        return this.users;
    }

    static find ( id ) {
        return this.users.find ( ( item ) => item.id == id );
    }

    static create ( description ) {
        let newUser = new User ( description );
        newUser.id = this.users.length + 1;
        this.users.push ( newUser );
        return newUser;
    }

    static destroy ( id ) {
        this.users.splice ( id - 1, 1 );
        return;
    }

    static update ( id ) { }

}

UserDB.users = [];

module.exports = UserDB;