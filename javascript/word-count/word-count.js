export const countWords = (phrase) => {

  const words = phrase
  .toLowerCase()
  .match(/\b[\w']+\b/g)
  let counts = {};
  words.map(word => {
    return counts[word] = counts[word] ? counts[word] += 1 : 1;
  })
  return counts;
};
