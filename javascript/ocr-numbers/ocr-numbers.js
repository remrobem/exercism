//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//   '    _  _     _  _  _  _  _  _ \n'
// + '  | _| _||_||_ |_   ||_||_|| |\n'
// + '  ||_  _|  | _||_|  ||_| _||_|\n'
// + '                              ',

// '    _  _     _  _  _  _  _  _ \n' + '  | _| _||_||_ |_   ||_||_|| |\n' + '  ||_  _|  | _||_|  ||_| _||_|\n' + '                              ',
const test =
    '    _  _     _  _  _  _  _  _ \n'
  + '  | _| _||_||_ |_   ||_||_|| |\n'
  + '  ||_  _|  | _||_|  ||_| _||_|\n'
  + '                              ';

//const test1 = '    _  _     _  _  _  _  _  _   | _| _||_||_ |_   ||_||_|| |  ||_  _|  | _||_|  ||_| _||_|                              ';


const convert = (string) => {
  // export const convert = () => {
  const ocrs = [
    // zero
    ' _ ' + '| |' + '|_|' + '   ',
    // one
    '   ' + '  |' + '  |' + '   ',
    // two 
    ' _ ' + ' _|' + '|_ ' + '   ',
    // three 
    ' _ ' + ' _|' + ' _|' + '   ',
    // four   
    '   ' + '|_|' + '  |' + '   ',
    // five   
    ' _ ' + '|_ ' + ' _|' + '   ',
    // six   
    ' _ ' + '|_ ' + '|_|' + '   ',
    // seven   
    ' _ ' + '  |' + '  |' + '   ',
    // eight   
    ' _ ' + '|_|' + '|_|' + '   ',
    // nine   
    ' _ ' + '|_|' + ' _|' + '   ',
  ]
  // console.log(ocrs.toString())

  const ocrInput = string.replace(/\n/g, '');
  if (ocrInput.length % 12 != 0) {
    throw new Error("Malformed input");
  }
  console.log('ocrInput: ', ocrInput)
// a digit is a 3x4 grid (12 values)
  const digitCount = ocrInput.length / 12;
  console.log('count Char: ', digitCount)

  let ocrArray = [];

  // one time for each digit in input
  for (let count = 1; count <= digitCount; count++) {
    let ocrChar = '';
    // 4 rows for each char
    for (let row = 0; row < 3; row++) {
      // 3 columns for each char
      for (let column = (count * 3) - 3; column < count * 3; column++) {
        console.log('row: ', row, 'column: ', column, 'value: ', ocrInput.charAt( (column) * (row) ))
        ocrChar = ocrChar.concat(ocrInput.charAt( (column * 3) + (row * 4) ))
      }
    }
    console.log('push: *', ocrChar, '*')
    ocrArray.push(ocrChar);
    ocrChar = '';
  }

  console.log(ocrArray);
  ocrArray.map(ocr => {
    console.log(ocrs.indexOf(ocr))
  })

  // throw new Error("Remove this statement and implement this function");
};

console.log(convert(test))