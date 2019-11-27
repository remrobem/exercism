const ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export const isPangram = (string) => {

string = string.toLowerCase();

// filter will search for all letters, even if one has alreay been found missing
// let missing = ALPHABET.filter( (letter) => {
//   return !string.includes(letter)
// })

// return missing.length == 0 ? true : false

// for loop will stop on first missing letter
for (let i=0; i < ALPHABET.length - 1; i++) {
  if (!string.includes(ALPHABET[i])) {
    return false;
  }
}

return true;

};
