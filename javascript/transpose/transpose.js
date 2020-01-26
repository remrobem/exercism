
export const transpose = (input) => {

  // if no 2nd string, return array of the 1st string or empty array
  if (!input[1]) {
    return input[0] ? input[0].split('') : [];
  }
  // need longest string to pad with spaces as needed
  const maxLength = input.reduce((max, curr) => {
    return curr.length > max ? curr.length : max;
  }, 0);

  // array of letters for each input string
  const strings = input.map(string => {
    return string.split('');
  });

  let transposedString = '';
  let transposed = [];

  // loop to create new string - each new string needs to have length = maxLength
  for (let letterIndex = 0; letterIndex < maxLength; letterIndex++) {
    // loop thru input strings array getting letter for same position in each string
    strings.map((string) => {
      // use letter at current position or pad with spaces 
      if (letterIndex < string.length) {
        transposedString = transposedString.concat(string[letterIndex])
      } else {
        transposedString = transposedString.concat(' ');
      }
    })

    transposed.push(transposedString);
    transposedString = '';
  }
  // last entry may have extra spaces concatenated on to the end - need to be removed
  transposed[transposed.length - 1] = transposed[transposed.length - 1].trimEnd();
  return transposed;
};
