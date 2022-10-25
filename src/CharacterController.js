const { Character, PC, NPC } = require('./Character');
const { PCDB, NPCDB } = require('./CharacterDB');

class PCController {

    async index(req, res) {
        let pcs = await PCDB.all();

        res.render("PCIndex", {pcs: pcs});
    }

    async show(req, res) {
        let id = req.params.id;
        let pc = await PCDB.find(id);

        if(!pc){
            res.send("Could not find a PC with ID of " + id);
        } else {
            res.render("PCShow", {pc: pc});
        }
    }

    newPC(req, res) {
        res.render("PCNew", {pc: new PC()});
    }

    async create(req, res) {
        let newPC = await PCDB.create(req.body.pc);

        if(newPC.isValid()){
            res.writeHead(302, {"Location": `/PCs/${newPC.id}`});
            res.end()
        } else {
            res.render('PCNew', {pc: newPC});
        }
    }

    async edit(req, res) {
        let id = req.params.id;
        let pc = await PCDB.find(id);

        if (!pc) {
            res.send("Could not find PC with ID of " + id);
        } else {
            res.render('PCEdit', { pc: pc });
        }
    }

    async update(req, res) {
        let id = req.params.id;
        let pc = await PCDB.find(id);

        let testPC = new PC(req.body.pc);
        if(!testPC.isValid()){
            testPC.id = pc.id;
            res.render('PCEdit', {pc: testPC});
            return;
        }

        if(!pc){
            res.send("Could not find PC with ID of " + id);
        } else {
            pc.name = req.body.pc.name;
            pc.portrait = req.body.pc.portrait;
            pc.game = req.body.pc.game;
            pc.level = req.body.pc.level;
            pc.qxp = req.body.pc.qxp;
            pc.gp = req.body.pc.gp;
            pc.inventory = req.body.pc.inventory;
            pc.user = req.body.pc.user;

            PCDB.update(pc);

            res.writeHead(302, {"Location": `/PCs/${pc.id}`});
            res.end();
        }
    }

    async destroy(req, res){
        let id = req.params.id;
        let pcs = await PCDB.all();
        let pc = PCDB.find(id);

        if(!pc){
            res.send("Could not find PC with ID of " + id);
        } else{
            PCDB.destroy(id);
            res.render('PCIndex', {pcs:pcs});
        }
    }

    async rawIndex(req, res) {
        let pcs = await PCDB.all();
        res.send(pcs);
    }

}

class NPCCOntroller {

    async index(req, res) {
        let npcs = await NPCDB.all();

        res.render("NPCIndex", {npcs: npcs});
    }

    async show(req, res) {
        let id = req.params.id;
        let npc = await NPCDB.find(id);

        if(!npc){
            res.send("Could not find an NPC with ID of " + id);
        } else {
            res.render("NPCShow", {npc: npc});
        }
    }

    newPC(req, res) {
        res.render("NPCNew", {npc: new NPC()});
    }

    async create(req, res) {
        let newNPC = await NPCDB.create(req.body.npc);

        if(newNPC.isValid()){
            res.writeHead(302, {"Location": `/NPCs/${newNPC.id}`});
            res.end()
        } else {
            res.render('NPCNew', {npc: newNPC});
        }
    }

    async edit(req, res) {
        let id = req.params.id;
        let npc = await NPCDB.find(id);

        if (!npc) {
            res.send("Could not find NPC with ID of " + id);
        } else {
            res.render('NPCEdit', { npc: npc });
        }
    }

    async update(req, res) {
        let id = req.params.id;
        let npc = await NPCDB.find(id);

        let testNPC = new NPC(req.body.npc);
        if(!testNPC.isValid()){
            testNPC.id = npc.id;
            res.render('NPCEdit', {npc: testNPC});
            return;
        }

        if(!npc){
            res.send("Could not find NPC with ID of " + id);
        } else {
            npc.name = req.body.npc.name;
            npc.portrait = req.body.npc.portrait;
            npc.game = req.body.npc.game;
            npc.home = req.body.npc.home;
            npc.known = req.body.npc.known;

            NPCDB.update(npc);

            res.writeHead(302, {"Location": `/NPCs/${npc.id}`});
            res.end();
        }
    }

    async destroy(req, res){
        let id = req.params.id;
        let npcs = await NPCDB.all();
        let npc = NPCDB.find(id);

        if(!npc){
            res.send("Could not find NPC with ID of " + id);
        } else{
            NPCDB.destroy(id);
            res.render('NPCIndex', {npcs:npcs});
        }
    }

    async rawIndex(req, res) {
        let npcs = await NPCDB.all();
        res.send(npcs);
    }

}

module.exports = { PCController, NPCCOntroller };