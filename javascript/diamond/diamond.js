
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const rows = (letter) => {

  const position = alphabet.indexOf(letter);
  let result = [];
  const length = position * 2 + 1;
  const blankString = ''.padEnd(length, ' ');
  let firstPosition;
  let secondPosition;
  let resultEntry;


  for (let i = 0; i <= position; i++) {
    // determine position of the first occurance of the letter
    firstPosition = (length - (i * 2 - 1) - 2) / 2;
    // determine position of the second occurance of the letter
    secondPosition = length - firstPosition - 1;

    // add letter in first position
    resultEntry = `${blankString.substring(0, firstPosition)}${alphabet[i]}${blankString.substring(firstPosition + 1)}`;
    // add letter in second position
    resultEntry = `${resultEntry.substring(0, secondPosition)}${alphabet[i]}${resultEntry.substring(secondPosition + 1)}`;
    result.push(resultEntry);
  }

  // take the existing entries above the last entry and add to result array
  for (let i = result.length - 2; i >= 0; i--) {
    result.push(result[i]);
  }

  return result;
};