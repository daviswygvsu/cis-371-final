const {PC, NPC} = require('../Character');

describe("PC", () => {

    describe(".constructor", () => {
        it('should set all PC properties', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: 10, user: 1});
            expect(pc.name).toBe('Crewmate');
            expect(pc.portrait).toBe('crewmate.png');
            expect(pc.game).toBe(1);
            expect(pc.level).toBe(2);
            expect(pc.xp).toBe(350);
            expect(pc.gp).toBe(10);
            expect(pc.user).toBe(1);
        });
        it('should generate an empty error list', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: 10, user: 1});
            expect(pc.errors.length).toBe(0);
        });
    });

    describe("#isValid", () => {
        it('recognizes a valid pc', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: 10, user: 1});
            expect(pc.isValid()).toBe(true);
        });

        it('recognizes a missing name is invalid', () => {
            let pc = new PC({portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: 10, user: 1});
            expect(pc.isValid()).toBe(false);
        });

        it('recognizes a missing game is invalid', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', level: 2, xp: 350, gp: 10, user: 1});
            expect(pc.isValid()).toBe(false);
        });

        it('recognizes a negative level is invalid', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: -2, xp: 350, gp: 10, user: 1});
            expect(pc.isValid()).toBe(false);
        });

        it('recognizes a negative amount of gold is invalid', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: -10, user: 1});
            expect(pc.isValid()).toBe(false);
        });

        it('recognizes a negative amount of xp is invalid', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: -350, gp: 10, user: 1});
            expect(pc.isValid()).toBe(false);
        });

        it('recognies a missing user is invalid', () => {
            let pc = new PC({ name: 'Crewmate', portrait: 'crewmate.png', game: 1, level: 2, xp: 350, gp: 10});
            expect(pc.isValid()).toBe(false);
        });
    });

    describe(".constructor", () => {
        it('should set all NPC properties', () => {
            let npc = new NPC({ name: 'Impostor', portrait: 'impostor.png', game: 1, home: 2, known: 0});
            expect(npc.name).toBe('Impostor');
            expect(npc.portrait).toBe('impostor.png');
            expect(npc.game).toBe(1);
            expect(npc.home).toBe(2);
            expect(npc.known).toBe(0);
        });
        it('should generate an empty error list', () => {
            let npc = new NPC({ name: 'Impostor', portrait: 'impostor.png', game: 1, home: 2, known: 0});
            expect(npc.errors.length).toBe(0);
        });
    });




});

