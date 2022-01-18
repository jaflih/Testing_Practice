const stringLength = require('./stringLength');

test('the length of this string `hello` is 5', () => {
  const string = 'hello';

  const length = stringLength(string);

  expect(length).toBe(5);
});

test('the length of the empty string throws an error', () => {
  const string = '';

  const callFunction = (sentence) => stringLength(sentence);

  expect(() => callFunction(string)).toThrow();
});


test('the length of this string `hello world` throws an error because is more than 10 caracters', () => {
  const string = 'hello world';

  const callFunction = (sentence) => stringLength(sentence);

  expect(() => callFunction(string)).toThrow();
});
