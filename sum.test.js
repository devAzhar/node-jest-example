const sum = require('./sum');

describe("sum function", () => {
    test('Test positive integer sum', () => {
        const actual = 5;
        const expected = sum(2, 3);

        expect(actual).toBe(expected);
    });

    test('Test negative integers sum', () => {
        const actual = -10;
        const expected = sum(-4, -6);

        expect(actual).toBe(expected);
    });
});

describe("example failed tests", () => {
    test('Example of failed test', () => {
        const actual = 5;
        const expected = sum(6, -2);

        expect(actual).toBe(expected);
    });
});
