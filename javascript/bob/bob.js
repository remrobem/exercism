export const hey = (message) => {

  // remove whitespace, tab, newline,....
  const compressedMessage = message.replace(/\s/g,'');

  // check for question - end with ?
  const isQuestion = compressedMessage.endsWith('?');

  // check for yelling  - if any letters exist, they must all be uppercase
  let isYelling = compressedMessage.search(/[A-Za-z]/) >= 0 ?
    compressedMessage.toUpperCase() == compressedMessage ? true : false
    : false;

  if (compressedMessage.length === 0) {
    return "Fine. Be that way!";
  }

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  return "Whatever."

};
