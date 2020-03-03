/* eslint-disable no-fallthrough */
//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

export const toRoman = (decimal) => {

  const digits = Array.from(String(decimal), Number);
  const digitsLength = digits.length
  let ones = 0;
  let tens = 0;
  let hundreds = 0;
  let thousands = 0;

  switch (true) {
    case digitsLength > 0:
      ones = digits[digitsLength - 1];
    case digitsLength > 1:
      tens = digits[digitsLength - 2]
    case digitsLength > 2:
      hundreds = digits[digitsLength - 3]
    case digitsLength > 3:
      thousands = digits[digitsLength - 4]
  }
  console.log(digits)
  console.log(ones, tens, hundreds, thousands);

  let romanNumerals = [];

  switch (true) {
    case thousands > 0:
      for (let i = 0; i < thousands; i++) {
        romanNumerals.push('M');
      }

    case hundreds > 0:
      if (hundreds >= 5) {
        romanNumerals.push('D');
        hundreds -= 5;
      }
      for (let i = 0; i < hundreds; i++) {
        romanNumerals.push('C');
      }
    case tens > 0:
      if (tens >= 5) {
        romanNumerals.push('L');
        tens -= 5;
      }
      for (let i = 0; i < tens; i++) {
        romanNumerals.push('X');
      }
    case ones > 0:
      if (ones >= 5) {
        romanNumerals.push('V');
        ones -= 5;
      }
      for (let i = 0; i < ones; i++) {
        romanNumerals.push('I');
      }


    default:
      break;
  }
  console.log(romanNumerals)

  return romanNumerals.join('');

  // throw new Error("Remove this statement and implement this function");
};
