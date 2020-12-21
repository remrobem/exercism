
export const isPaired = (inputString) => {
  const regex = /[^\(\)\{\}\[\]]/g;
  // remove any chars not equal to (){}[]
  const brackets = inputString.replace(regex, '').split('');

  // map of opening bracket to its closing bracket
  const bracketPairs = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ]);

  const expectedClosingBrackets = [];

  for (let i = 0; i < brackets.length; i++) {
    // if an opening bracket, add closing bracket to expected closing brackets
    if (bracketPairs.has(brackets[i])) {
      expectedClosingBrackets.unshift(bracketPairs.get(brackets[i]));
    } else {
      // else the closing bracket must equal first expected closing bracket
      if (brackets[i] !== expectedClosingBrackets[0]) {
        return false;
      }
      // remove expected closing bracket after good match with opening bracket
      expectedClosingBrackets.shift();
    }
  }

  // return false if any expected closing brackets are left over
  return expectedClosingBrackets.length == 0;
};
