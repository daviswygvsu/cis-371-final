const Game = require("../Game");

describe("Game", () => {

    describe(".constructor", () => {
        it('should set all game properties', () => {
            let game = new Game({ name: 'Isles of Mogoroth', world: 'Terraria', gm: 2});
            expect(game.name).toBe('Isles of Mogoroth');
            expect(game.world).toBe('Terraria');
            expect(game.gm).toBe(2);
        });
        it('should generate an empty error list', () => {
            let game = new Game({ name: 'Isles of Mogoroth', world: 'Terraria', gm: 2});
            expect(game.errors.length).toBe(0);
        });

        describe("#isValid", () => {
            it('recognizes a valid game', () => {
                let game = new Game({ name: 'Isles of Mogoroth', world: 'Terraria', gm: 2});
                expect(game.isValid()).toBe(true);
            });

            it('recognizes a missing name is invalid', () => {
                let game = new Game({ world: 'Terraria', gm: 2});
                expect(game.isValid()).toBe(false);
            });

            it('recognizes a missing game master to be invalid', () => {
                let game = new Game({ name: 'Isles of Mogoroth', world: 'Terraria'});
                expect(game.isValid()).toBe(false);
            });
        });
    });

});