export const hey = (message) => {

  // remove whitespace, tab, newline,....
  const compressedMessage = message.replace(/(?:\s)/g, '');

  // empty string
  if (compressedMessage.length === 0) {
    return 'Fine. Be that way!';
  }

  // check for question - end with ?
  const isQuestion = compressedMessage.endsWith('?');

  // check for yelling  - if any letters exist, they must all be uppercase
  let isYelling = compressedMessage.search(/[A-Za-z]/) >= 0 ?
    compressedMessage.toUpperCase() == compressedMessage ? true : false
    : false;


  // return appropriate answer
  return ((isQuestion && isYelling) ? "Calm down, I know what I'm doing!"
    : isQuestion ? 'Sure.'
      : isYelling ? 'Whoa, chill out!'
        : 'Whatever.'
  )
};
