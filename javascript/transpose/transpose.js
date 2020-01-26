import { loadOptions } from "@babel/core";

export const transpose = (strings) => {

  // const input = ['FRACTURE', 'OUTLINED', 'BLOOMING', 'SEPTETTE'];
  // const expected = ['FOBS', 'RULE', 'ATOP', 'CLOT', 'TIME', 'UNIT', 'RENT', 'EDGE'];


  // if no 2nd string, return array of the 1st string
  if (!strings[1]) {
    return strings[0] ? strings[0].split('') : [];
  }
  // pad with spaces at end to get strings same length
  const maxLength = strings.reduce((max, curr) => {
    return curr.length > max ? curr.length : max;
  }, 0);
  // strings = strings.map(string => {
  //   return string.padEnd(maxLength, ' ');
  // });

  strings = strings.map(string => {
    return string.split('');
  });

// console.log(strings)

  // split each string into an array with entry for each char in string
  // const array0 = strings[0].split('');
  // const array1 = strings[1].split('');

  // concat values from 2 arrays 
  // need to use maxlength
  return strings[0].map((char, index) => {
    for (let i = 1; i < strings.length; i++) {
      if (index < strings[i].length) {
        char = char.concat(strings[i][index])
      }
    }
    // console.log(char)
    return char;
  })
};
