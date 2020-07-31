export const classify = (number) => {

if (number <= 0) {
  throw new Error('Classification is only possible for natural numbers.')
}

const sum = sumFactors(number);

return sum == number ? 'perfect' : sum > number ? 'abundant' : 'deficient'

};

const sumFactors = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number%i == 0) {
      sum += i;
    }
  }
  return sum;
}