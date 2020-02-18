export const primeFactors = (number) => {
  let factors = [];
  let factor = 2;

  while(number != 1) {
      number % factor === 0 
      ? (factors.push(factor), number = number / factor)
      : factor += 1;
    }
  return factors;
};
