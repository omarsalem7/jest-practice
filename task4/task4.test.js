const capitalize = require('./task4')

test('"hello" should be "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('"omar" should be "Omar"', () => {
    expect(capitalize('omar')).toBe('Omar');
});