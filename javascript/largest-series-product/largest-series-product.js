export const largestProduct = (number, span) => {
  // validations
  if (span > number.length) {
    throw new Error("Span must be smaller than string length");
  }
  if (number.match(/[^0-9]/)) {
    throw new Error("Digits input must only contain digits");
  }
  if (span < 0) {
    throw new Error("Span must be greater than zero");
  }
  // per specs, return 1 when span is zero
  if (span == 0) {
    return 1;
  }

  // number into an array, loop and calculate product for all spans svaine the largest product
  let largest = 0;
  let numbers = number.split('');
  for (let i = 0; i < number.length - 1; i++) {
    let current = 1;
    for (let j = i; j <= span + i - 1; j++) {
      current = current * numbers[j];
    }
    largest = current > largest ? current : largest;
  }

  return largest;

};
