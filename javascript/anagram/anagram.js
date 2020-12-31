export const findAnagrams = (inputString, anagrams) => {
  return anagrams.filter((anagram) => {
    return lowerCaseSort(inputString) == lowerCaseSort(anagram) && lowerCase(inputString) != lowerCase(anagram);
  });
};

const lowerCaseSort = (string) => {
  return string.toLowerCase().split('').sort().join('');
}

const lowerCase = (string) => {
  return string.toLowerCase();
}