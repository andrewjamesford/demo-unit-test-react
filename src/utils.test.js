import isFreeShipping from './utils';

describe('Test isFreeShipping utility function', () => {
  test('If input > 100 returns true', () => {
    const result = isFreeShipping(150);
    expect(result).toBe(true);
  });
  test('If input < 0 returns false', () => {
    const result = isFreeShipping(-100);
    expect(result).toBe(false);
  });
  test('If input is not  a number', () => {
    expect(() => isFreeShipping('')).toThrow(
      'purchasedAmount must be a number'
    );
  });
});

describe.each([
  { purchaseAmount: 50, expected: false },
  { purchaseAmount: 101, expected: true },
  { purchaseAmount: 100, expected: false },
  { purchaseAmount: 99, expected: false },
  { purchaseAmount: 0, expected: false },
  { purchaseAmount: -100, expected: false },
  { purchaseAmount: 100.01, expected: true },
])('Test a range of number inputs', ({ purchaseAmount, expected }) => {
  test(`${purchaseAmount} returns ${expected}`, () => {
    expect(isFreeShipping(purchaseAmount)).toBe(expected);
  });
});
