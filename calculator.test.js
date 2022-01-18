const Calculator = require('./calculator');

describe('Calculator testing Add function', () => {
  test('Add 1 and 2 is 3', () => {
    const calcul = new Calculator();

    const result = calcul.add(1, 2);

    expect(result).toBe(3);
  });

  test('Add 100 and 23 is 123', () => {
    const calcul = new Calculator();

    const result = calcul.add(100, 23);

    expect(result).toBe(123);
  });

  test('Add -1 and 1 is 0', () => {
    const calcul = new Calculator();

    const result = calcul.add(-1, 1);

    expect(result).toBe(0);
  });
});

describe('Calculator testing subtract function', () => {
  test('subtract 3 and 2 is 1', () => {
    const calcul = new Calculator();

    const result = calcul.subtract(3, 2);

    expect(result).toBe(1);
  });

  test('subtract 1 and 1 is 0', () => {
    const calcul = new Calculator();

    const result = calcul.subtract(1, 1);

    expect(result).toBe(0);
  });

  test('subtract -3 and -2 is -1', () => {
    const calcul = new Calculator();

    const result = calcul.subtract(-3, -2);

    expect(result).toBe(-1);
  });
});

describe('Calculator testing Divide function', () => {
  test('Divide 12 and 2 is 6', () => {
    const calcul = new Calculator();

    const result = calcul.divide(12, 2);

    expect(result).toBe(6);
  });

  test('Divide 12 and 12 is 1', () => {
    const calcul = new Calculator();

    const result = calcul.divide(12, 12);

    expect(result).toBe(1);
  });

  test('Divide 23 and 2 is 11.5', () => {
    const calcul = new Calculator();

    const result = calcul.divide(23, 2);

    expect(result).toBe(11.5);
  });
});

describe('Calculator testing multiply function', () => {
  test('Multiply 1 and 2 is 2', () => {
    const calcul = new Calculator();

    const result = calcul.multiply(1, 2);

    expect(result).toBe(2);
  });

  test('Multiply 1 and 0 is 0', () => {
    const calcul = new Calculator();

    const result = calcul.multiply(1, 0);

    expect(result).toBe(0);
  });

  test('Multiply -1 and 2 is -2', () => {
    const calcul = new Calculator();

    const result = calcul.multiply(-1, 2);

    expect(result).toBe(-2);
  });
});
