let User = require('../User');

describe("User", () => {

    describe(".constructor", () => {
        it('should set all user properties', () => {
            let user = new User({ name: 'Steve Jobs', password: 'apple01'});
            expect(user.name).toBe('Steve Jobs');
            expect(user.password).toBe('apple01');
        });
        it('should generate an empty error list', () => {
            let user = new User({ name: 'Steve Jobs', password: 'apple01'});
            expect(user.errors.length).toBe(0);
        });

        describe("#isValid", () => {
            it('recognizes a valid user', () => {
                let user = new User({ name: 'Steve Jobs', password: 'apple01'});
                expect(user.isValid()).toBe(true);
            });

            it('recognizes a missing name is invalid', () => {
                let user = new User({ password: 'apple01'});
                expect(user.isValid()).toBe(false);
            });

            it('recognizes a missing password is invalid', () => {
                let user = new User({ name: 'Steve Jobs'});
                expect(user.isValid()).toBe(false);
            });
        });
    });
});