const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = (paramString) => {
  // input may have upper case letters
  const string = paramString.toLowerCase();

  // callback function for checking for existence of every letter in alphabet
  const isFound = (letter) => string.includes(letter);
  
  // true: all letters of ALPHABET in the string parameter. 
  // false: first occurance of ALPHABET letter not in string parameter. 
  return ALPHABET.every(isFound);
};
