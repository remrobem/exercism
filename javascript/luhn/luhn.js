//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (string) => {

  // remove whitespace - not used in calculation
  const number = string.replace(/\s/g, '');

  // must be all numbers and non single digit numbers
  if (number.match(/[^0-9]/) || number.length < 2) {
    return false;
  }

  // reverse the number string so the every other number (odd index) doubling works
  let sum = 0;
  number.split('').reverse().map((value, index) => {
    value = Number(index % 2 != 0
      ? (value * 2 > 9
        ? (value * 2) - 9 : value * 2)
      : value);
      // sum the digits as they are being mapped
    sum += value;
  })
  
  return sum % 10 == 0 ? true : false;
};
