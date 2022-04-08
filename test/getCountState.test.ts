import getCountState from '../src/lib/getCountState';

describe('getCountState()', () => {
  it.each([
    [{
      '10': 2,
      '5': 3,
      '2': 1,
    }, '5:3, 10:2, 2:1'],
    [{
      '5': 3,
      '10': 2,
      '2': 1,
    }, '5:3, 10:2, 2:1'],
    [{
      '10': 2,
      '2': 1,
      '5': 3,
    }, '5:3, 10:2, 2:1'],
    [{
      '10': 2,
      '6': 3,
      '35': 1,
    }, '6:3, 10:2, 35:1'],
    [{
      '10': 2,
      '2': 102,
      '6': 3,
      '35': 1,
    }, '2:102, 6:3, 10:2, 35:1'],
  ])('returns correct output', (input, expectedOutput) => {
    const output = getCountState(input);

    expect(output).toEqual(expectedOutput);
  });
});
