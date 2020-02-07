//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (string) => {

  const number = string.replace(/\s/g, '');
  console.log('1 string:', string, ' number:', number);


  if (number.match(/[^0-9]/) || number.length < 2) {
    return false;
  }
  console.log('2 string:', string, ' number:', number);
  let sum = 0;
  number.split('').map((value, index) => {
    // let value = entry;
    console.log('1 value:', value, typeof value);
  
    value = Number(!index % 2 == 0 ? (value * 2 > 9 ? (value * 2) - 9 : value * 2) : value);
    console.log('2 value:', value, typeof value);
    sum += value;
    console.log('sum:', sum);

  })

  return sum % 10 == 0 ? true : false;
  // throw new Error("Remove this statement and implement this function");
};
