const capitalize = require('./capitalize');

test('the capitalize string of `hello` is `Hello`', () => {
  const string = 'hello';

  const result = capitalize(string);

  expect(result).toBe('Hello');
});
