class User {
    constructor ( description ) {
        if ( description ) {
            this.id = description.id; // The numerical identifier for this user
            this.username = description.username; // This user's identifying tag
            this.password = description.password; // This user's access key
        }
    }
}

module.exports = User;