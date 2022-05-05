import { getSumBySpacedNumbers } from '../CalculationUtils';

describe('Calculation Utils', () => {
  it('returns the sum when a space separated numbers are given', () => {
    let input = '1 2 3 4 5';
    let sum = getSumBySpacedNumbers(input);
    expect(sum).toBe(15);

    input = '2 4     ';
    sum = getSumBySpacedNumbers(input);
    expect(sum).toBe(6);

    input = '    ';
    sum = getSumBySpacedNumbers(input);
    expect(sum).toBe(0);
  });
});
