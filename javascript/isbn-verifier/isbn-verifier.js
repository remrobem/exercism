//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// The ISBN-10 format is 9 digits (0 to 9) plus one check character (either a digit or an X only). In the case the check character is an X, this represents the value '10'. These may be communicated with or without hyphens, and can be checked for their validity by the following formula:

// ```
// (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0
// ```

// If the result is 0, then it is a valid ISBN-10, otherwise it is invalid.

// ## Example

// Let's take the ISBN-10 `3-598-21508-8`. We plug it in to the formula, and get:
// ```
// (3 * 10 + 5 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 1 * 5 + 5 * 4 + 0 * 3 + 8 * 2 + 8 * 1) mod 11 == 0
// ```

// Since the result is 0, this proves that our ISBN is valid.


export const isValid = (isbn) => {

  isbn = isbn.replace(/-/g,'');

  if(isbn.length != 10) {
    return false
  }

  isbn = isbn.split('');

  if (isbn[9] == 'X') isbn[9] = '10';

  const isNumber = (number) => number.match(/[0-9]/g);
  if (!isbn.every(isNumber)) return false;

  const isbnFormula = (number, digit, index) => {
    return number += digit * (10 - index);
  };
  const result = isbn.reduce(isbnFormula,0) % 11;

return result === 0;
};
