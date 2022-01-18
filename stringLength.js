function stringLength(string) {
  const length = string.length;
  if (length < 1) throw 'the string is at least 1 character long';
  if (length > 10) throw 'the string is not longer than 10 characters';
  return length;
}
module.exports = stringLength;
