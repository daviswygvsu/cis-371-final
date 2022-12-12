const Quest = require("../Quest");

describe("Quest", () => {

    describe(".constructor", () => {
        it('should set all quest properties', () => {
            let quest = new Quest({ name: 'Crusade against the demons', game: 2, level: 3, known: 1, xp: 1000, description: "Kill all the demons lol!"});
            expect(quest.name).toBe('Crusade against the demons');
            expect(quest.game).toBe(2);
            expect(quest.level).toBe(3);
            expect(quest.known).toBe(1);
            expect(quest.xp).toBe(1000);
            expect(quest.description).toBe('Kill all the demons lol!');
        });
        it('should generate an empty error list', () => {
            let quest = new Quest({ name: 'Crusade against the demons', game: 2, level: 3, known: 1, xp: 1000, description: "Kill all the demons lol!"}); 
            expect(quest.errors.length).toBe(0);
        });
    });

    describe("#isValid", () => {
        it('recognizes a valid quest', () => {
            let quest = new Quest({ name: 'Crusade against the demons', game: 2, level: 3, known: 1, xp: 1000, description: "Kill all the demons lol!"});
            expect(quest.isValid()).toBe(true);
        });

        it('recognizes a missing name is invalid', () => {
            let quest = new Quest({ game: 2, level: 3, known: 1, xp: 1000, description: "Kill all the demons lol!"});
            expect(quest.isValid()).toBe(false);
        });

        it('recognizes a missing game is invalid', () => {
            let quest = new Quest({ name: 'Crusade against the demons', level: 3, known: 1, xp: 1000, description: "Kill all the demons lol!"});
            expect(quest.isValid()).toBe(false);
        });

        it('recognizes a missing level is invalid', () => {
            let quest = new Quest({ name: 'Crusade against the demons', game: 2, known: 1, xp: 1000, description: "Kill all the demons lol!"});
            expect(quest.isValid()).toBe(false);
        });
    });
});