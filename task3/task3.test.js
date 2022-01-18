const Calculator = require('./task3');
describe('Add function', () => {
    const calc = new Calculator();
    test('5 + 2 = 7 ', () => {
        expect(calc.add(5, 2)).toBe(7);
    });
    test('1 + 0 = 1 ', () => {
        expect(calc.add(1, 0)).toBe(1);
    });
});

describe('Remove function', () => {
    const calc = new Calculator();
    test('5 - 2 = 3 ', () => {
        expect(calc.subtract(5, 2)).toBe(3);
    });
    test('1 - 1 = 0 ', () => {
        expect(calc.subtract(1, 1)).toBe(0);
    });
});


describe('divide function', () => {
    const calc = new Calculator();
    test('6 / 2 = 3 ', () => {
        expect(calc.divide(6, 2)).toBe(3);
    });
    test('1 / 1 = 1 ', () => {
        expect(calc.divide(1, 1)).toBe(1);
    });
});


describe('muliply function', () => {
    const calc = new Calculator();
    test('6 * 2 = 12 ', () => {
        expect(calc.multiply(6, 2)).toBe(12);
    });
    test('1 * 0 = 0 ', () => {
        expect(calc.multiply(1, 0)).toBe(0);
    });
});
