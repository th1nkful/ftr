import isFibonacciNumber from '../src/lib/isFibonacciNumber';

describe('isFibonacciNumber()', () => {
  it.each([
    [-12, false],
    [-1, false],
    [0, true],
    [1, true],
    [2, true],
    [3, true],
    [4, false],
    [5, true],
    [6, false],
    [7, false],
    [8, true],
    [9, false],
    [10, false],
    [13, true],
    [15, false],
    [21, true],
    [34, true],
    [43, false],
    [55, true],
    [60, false],
    [89, true],
    [90, false],
  ])('returns %i isFib: %p', (num, expected) => {
    const isFib = isFibonacciNumber(num);

    expect(isFib).toEqual(expected);
  });
});
