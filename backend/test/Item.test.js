let Item = require('../Item');

describe("Item", () => {

    describe(".constructor", () => {
        it('should set all item properties', () => {
            let item = new Item({ name: 'Big Punchy', owner: 3, value: 200, desc: 'hehe punch'});
            expect(item.name).toBe('Big Punchy');
            expect(item.owner).toBe(3);
            expect(item.value).toBe(200);
            expect(item.desc).toBe('hehe punch');
        });
        it('should generate an empty error list', () => {
            let item = new Item({ name: 'Big Punchy', owner: 3, value: 200, desc: 'hehe punch'});
            expect(item.errors.length).toBe(0);
        });

        describe("#isValid", () => {
            it('recognizes a valid item', () => {
                let item = new Item({ name: 'Big Punchy', owner: 3, value: 200, desc: 'hehe punch'});
                expect(item.isValid()).toBe(true);
            });

            it('recognizes a missing name is invalid', () => {
                let item = new Item({owner: 3, value: 200, desc: 'hehe punch'});
                expect(item.isValid()).toBe(false);
            });

            it('recognizes a missing owner is invalid', () => {
                let item = new Item({ name: 'Big Punchy', value: 200, desc: 'hehe punch'});
                expect(item.isValid()).toBe(false);
            });

            it('recognizes a negative value is invalid', () => {
                let item = new Item({ name: 'Big Punchy', owner: 3, value: -200, desc: 'hehe punch'});
                expect(item.isValid()).toBe(false);
            });

            it('recognizes a missing description is invalid', () => {
                let item = new Item({ name: 'Big Punchy', owner: 3, value: 200});
                expect(item.isValid()).toBe(false);
            });
        });
    });
});