const reverseString = require('./reverseString');

test('the reverse string of `hello` is `olleh`', () => {
  const string = 'hello';

  const reverse = reverseString(string);

  expect(reverse).toBe('olleh');
});

test('the reverse of empty string is empty string', () => {
  const string = '';

  const reverse = reverseString(string);

  expect(reverse).toBe('');
});
