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

  // number into an array, loop and calculate product for all spans saving the largest product
  let largest = 0;
  let numbers = number.split('');

  for (let i = 0; i <= numbers.length - span; i++) {
    const product = numbers
      .slice(i, i + span)
      .reduce((product, number) => { 
        return product * number 
      }, 1);
    largest = product > largest ? product : largest;
  }

  return largest;

};
