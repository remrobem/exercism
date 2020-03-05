
export const parse = (phrase) => {
  // remove any non-alpha except - and whitespace, get words and extract first letter of each word
  return phrase
    .replace(/[^a-z\-\s]/gi, '')
    .match(/\b(\w+)\b/g)
    .map(word => word.slice(0, 1))
    .join('')
    .toUpperCase()
};
