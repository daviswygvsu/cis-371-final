let GameDB = require('./GameDB');
let { PCDB, NPCDB } = require('./CharacterDB');
let UserDB = require('./UserDB');
const ItemDB = require('./ItemDB');

UserDB.initialize();
GameDB.initialize();
PCDB.initialize();
NPCDB.initialize();
ItemDB.initialize();