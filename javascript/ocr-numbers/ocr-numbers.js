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
  '    _  _     _  _  _  _  _  _ '
  + '  | _| _||_||_ |_   ||_||_|| |'
  + '  ||_  _|  | _||_|  ||_| _||_|'
  + '                              ';

// const test =  ' _ ' + '| |' + '|_|' + '   ';
//const test1 = '    _  _     _  _  _  _  _  _   | _| _||_||_ |_   ||_||_|| |  ||_  _|  | _||_|  ||_| _||_|                              ';


// const convert = (string) => {
export const convert = (string) => {

  // array of all digits used to compare to input
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
  // let comma = '         \n';
  // const commaLocations = [];

  // let findComma = string.indexOf(comma);
  // // console.log('1 findComma: ', findComma)
  // while (findComma >= 0) {
  //   commaLocations.push(findComma);
  //   findComma = string.indexOf(comma, findComma + 1)
  // }

  // for (let i = 0; i < string.length; i++) {
  //   console.log(string.indexOf(comma, i))
  //   if (string.indexOf(comma, i) >= 0) {
  //     commaLocations.push[i];
  //   }
  // }
  // console.log('commaLocations: ', commaLocations);
  // remove new line characters from input
  // string = string.replace(comma, ',');



  // a digit is a 3x4 grid (12 values)
  // make sure input is a multiple of 12
  // if (ocrInput.length % 12 != 0) {
  //   throw new Error("Malformed input. Not divisible by 12");
  // }

  // how many digits exist in the input
  // const digitCount = ocrInput.length / 12;
  // const firstNewLine = string.indexOf('\n');
  // const digitsPerLine = firstNewLine / 3;
  // const lineLength = digitsPerLine * 12;

  // const ocrString = string.replace(/\n/g, '');
  let ocrString = string;
  // console.log('firstNewLine: ', firstNewLine, digitsPerLine)

  let ocrArray = [];
  let ocrChar = '';

  while (ocrString.length > 0) {
    const firstNewLine = ocrString.indexOf('\n') >= 0 ? ocrString.indexOf('\n') : ocrString.length;
    const digitCount = firstNewLine / 3;
    const lineLength = digitCount * 12;
    // const ocrHold = ocrString.replace(/\n/g, '');
    const ocrInput = ocrString.replace(/\n/g, '').substring(0, lineLength);

    ocrString = ocrString.substring(firstNewLine + 1);

    // number of char to skip to find next row for a digit 
    let skip = (digitCount - 1) * 3;

    // one time for each digit in input
    for (let count = 0; count <= digitCount - 1; count++) {
      // get the characters for each digit in the input building an array for each digit
      for (let column = count * 3; column < ocrInput.length;) {
        ocrChar = ocrChar.concat(ocrInput.charAt(column))
        column++;
        ocrChar = ocrChar.concat(ocrInput.charAt(column));
        column++;
        ocrChar = ocrChar.concat(ocrInput.charAt(column));
        column = column + skip;
      }
      ocrArray.push(ocrChar);
      ocrChar = '';
    }


  }
  // splice return ????
  console.log('ocrArray: ', ocrArray)

  // look up the input digit value and return it
  return ocrArray.map(ocr => {
    const ocrValue = ocrs.indexOf(ocr);
    return ocrValue >= 0 ? ocrValue : '?';
  })
    .join('');

};


// console.log(convert(test))