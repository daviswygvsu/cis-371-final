let GameDB = require('./GameDB');
let { PCDB, NPCDB } = require('./CharacterDB');
let UserDB = require('./UserDB');
const ItemDB = require('./ItemDB');
const QuestDB = require('./QuestDB');
const LocationDB = require('./LocationDB');

UserDB.initialize();
GameDB.initialize();
PCDB.initialize();
NPCDB.initialize();
ItemDB.initialize();
QuestDB.initialize();
LocationDB.initialize();