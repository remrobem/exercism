"use strict";

export const convert = (string) => {

  // array of all digits, used to compare to input
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

  let ocrString = string;

  let ocrArray = [];
  let ocrChar = '';

  while (ocrString.length > 0) {
    // index for newline string
    const newLineIndex = ocrString.indexOf('\n');
    // last line does not have \n newline
    const lineLength = newLineIndex >= 0 ? newLineIndex : ocrString.length;
    // each digit is 3 positions in a line
    const digitCount = lineLength / 3;
    const digitsLength = digitCount * 12;
    // one set of digits when seperated in the input string 
    const ocrInput = ocrString.replace(/\n/g, '').substring(0, digitsLength);
    // remove characters just processed from the string for the next iteration
    ocrString = ocrString.substring((lineLength + 1) * 4);

    // number of char to skip to find next row for a digit 
    let skip = (digitCount * 3) - 2;

    // one time for each digit in input
    for (let count = 0; count <= digitCount - 1; count++) {
      // get the characters for each digit in the input,  build an array for each digit
      // a digit consumes 3 columns and 4 rows, the values for these rows are seperated by 
      // values for other digits
      // so this gets 3 values (columns) skips some values based on number of digits, gets next 3 values
      // until end of array (should be 4 times).
      let counter = 1;
      for (let position = count * 3; counter <= 4;) {
        ocrChar = ocrChar.concat(ocrInput.charAt(position))
        position++;
        ocrChar = ocrChar.concat(ocrInput.charAt(position));
        position++;
        ocrChar = ocrChar.concat(ocrInput.charAt(position));
        position += skip;
        counter++;
      }
      ocrArray.push(ocrChar);
      ocrChar = '';
    }
    // seperate with comma when input has sets of numbers
    if (ocrString.length > 0) {
      ocrArray.push(',');
    }
  }

  // look up the input digit value and return it or the comma seperator
  return ocrArray.map(ocr => {
    return ocr == ',' ? ocr
      : ocrs.indexOf(ocr) >= 0 ? ocrs.indexOf(ocr)
        : '?';
  }).join('');

};