let GameDB = require('./GameDB');
let { PCDB, NPCDB } = require('./CharacterDB');
let UserDB = require('./UserDB');

UserDB.initialize();
GameDB.initialize();
PCDB.initialize();
NPCDB.initialize();