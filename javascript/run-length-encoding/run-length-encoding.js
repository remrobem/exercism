//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (decoded = '') => {
  let charCount = 1;
  let encoded = '';
  let index = 0;

  let encoder = (encoded, string = decoded) => {
    index += 1;

    // duplicate character
    if (
      string.charAt(index) == string.charAt(index - 1) &&
      index < string.length
    ) {
      charCount += 1;
      return encoder(encoded);
    }

    // new character found so need to output last count and character
    if (charCount > 1) {
      encoded = encoded.concat(charCount);
    }
    encoded = encoded.concat(string.charAt(index - 1));

    // done
    if (index > string.length - 1) {
      return encoded;
    }

    // reset counter for next character
    charCount = 1;

    // process the next character
    return encoder(encoded);
  };

  return encoder(encoded);
};

export const decode = (encoded = '') => {
  let decoded = '';
  let charCount = '';

  for (let i = 0; i < encoded.length; i++) {

    if (Number.isNaN(+encoded.charAt(i)) || encoded.charAt(i) == ' ') {
      // char to be decoded is not a number, write out char 1 time or specified number of times
      charCount = charCount || 1;
      for (let j = +charCount; j > 0; j--) {
        decoded = decoded.concat(encoded.charAt(i));
      }
      charCount = '';
    } else {
      // char to be decoded is a number, can be multi-digit number
      charCount = charCount.concat(+encoded.charAt(i));
    }
  }

  return decoded;

};
