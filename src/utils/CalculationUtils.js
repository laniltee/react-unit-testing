// eslint-disable-next-line import/prefer-default-export
export const getSumBySpacedNumbers = (numberString) => {
  const numberArray = numberString.split(' ').map((i) => Number(i));
  return numberArray.reduce((a, b) => a + b);
};
