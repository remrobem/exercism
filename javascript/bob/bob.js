export const hey = (message) => {

  const msg = message.replace(/\s/g, '');
  const isYelling = yelling(msg);
  const isQuestion = msg.endsWith('?');
  const isSilent = silent(msg);

  if (isSilent) {
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

  // check for yelling  - if any letters exist, they must all be uppercase
  function yelling(message) {
    return message.search(/[A-Za-z]/) >= 0 ?
      message.toUpperCase() == message ? true : false
      : false;
  }

  // silent when no characters in message
  function silent(message) {
    return message.length === 0
  }

};
