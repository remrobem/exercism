export const countWords = (phrase) => {

  // change to lower case and match words, including those with an '
  const words = phrase
  .toLowerCase()
  .match(/\b[\w']+\b/g);
  // create object containing words and counts
  let counts = {};
  words.map(word => {
    return counts[word] = counts[word] ? counts[word] += 1 : 1;
  })
  return counts;
};
