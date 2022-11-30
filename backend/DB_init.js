let GameDB = require('./GameDB');
let { PCDB, NPCDB } = require('./CharacterDB');

GameDB.initialize();
PCDB.initialize();
NPCDB.initialize();