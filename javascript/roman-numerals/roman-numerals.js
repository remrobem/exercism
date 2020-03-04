
export const toRoman = (decimal) => {

  const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '?', '?'];
  let result = [];

  // array of decimal numbers reversed so in sequence of ones, tens, hundreds,....
  const digits = Array.from(String(decimal), Number).reverse();

  // covert each decimal digit to a roman numberal
  digits.map((digit, index) => {
    convertToRomanNumeral(index, digit);
  });

  return result.reverse().join('');

  // convert decimal digit to roman numeral. Needs to use the next highest 5,50,500 and next highest 10, 100, 1000
  function convertToRomanNumeral(position, count) {

    let char = romanNumerals[position * 2];
    let fiveChar = romanNumerals[(position * 2) + 1];
    let tenChar = romanNumerals[(position * 2) + 2];

    let romanNumeral = '';

    count === 9
      ? romanNumeral = pushToRomanNumerals(char + tenChar, 1)
      : count >= 5
        ? romanNumeral = pushToRomanNumerals(fiveChar, 1).concat(pushToRomanNumerals(char, count - 5))
        : count === 4
          ? romanNumeral = pushToRomanNumerals(char + fiveChar, 1)
          : romanNumeral = pushToRomanNumerals(char, count)

    result.push(romanNumeral)
  }

  // create string of repeating roman numerals
  function pushToRomanNumerals(char, count) {
    return Array(count).fill(char).join('');
  }
};
