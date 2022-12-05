class User {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numeric identifier for this user
            this.name = description.name // The title of this user
            this.password = description.password // The password for this user
        }
        this.errors = [];
    }

    isValid ( ) {
        if (!this.name) {
            this.errors.push("User must have a name.");
        } if (!this.password) {
            this.errors.push("User must have a password.")
        }

        return this.errors.length <= 0;
    }
}

module.exports = User;