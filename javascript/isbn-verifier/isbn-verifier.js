export const isValid = (isbn) => {

  isbn = isbn.replace(/-/g,'');

  if(isbn.length != 10) {
    return false
  }

  isbn = isbn.split('');

  if (isbn[9] == 'X') isbn[9] = '10';

  // every character must be number
  const isNumber = (number) => number.match(/[0-9]/g);
  if (!isbn.every(isNumber)) return false;

  // isbn formula
  const isbnFormula = (number, digit, index) => {
    return number += digit * (10 - index);
  };
  const result = isbn.reduce(isbnFormula,0) % 11;

return result === 0;
};
