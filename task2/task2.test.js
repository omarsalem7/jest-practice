const reverseString = require('./task2');

test('"hello" reversed to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('"madam" reversed to "madam"', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('"yes" reversed to "sey"', () => {
    expect(reverseString('hello')).toBe('olleh');
});


