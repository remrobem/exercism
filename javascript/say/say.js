export class Say {
  inEnglish(number) {
    // number must be in allowed range
    if (number < 0 || number > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    // numbers 20 and below are hard-coded in text map
    if (number <= 20) {
      return text.get(number);
    }

    // build arrays for each 000 multiple
    const numArray = number.toString().split('');

    const hundreds = [];
    const thousands = [];
    const millions = [];
    const billions = [];

    let count = 0;
    //loop the number and build hundred, thousands, millions, billions arrays
    for (let i = numArray.length - 1; i >= 0; i--) {
      count++;
      switch (count) {
        case 1:
        case 2:
        case 3:
          hundreds.unshift(+numArray[i]);
          break;

        case 4:
        case 5:
        case 6:
          thousands.unshift(+numArray[i]);
          break;

        case 7:
        case 8:
        case 9:
          millions.unshift(+numArray[i]);
          break;

        case 10:
        case 11:
        case 12:
          billions.unshift(+numArray[i]);
          break;

        default:
          throw new Error('Number must be between 0 and 999,999,999,999.');
      }
    }

    // for each 000 array, translate to text
    let textHundreds = translate(hundreds);
    let textThousands = translate(thousands);
    let textMillions = translate(millions);
    let textBillions = translate(billions);

    // add billion/million/thosand to text and return it
    return (
      (textBillions.length == 0
        ? ''
        : textBillions + ' ' + text.get(1000000000) + ' ') +
      (textMillions.length == 0
        ? ''
        : textMillions + ' ' + text.get(1000000) + ' ') +
      (textThousands.length == 0
        ? ''
        : textThousands + ' ' + text.get(1000) + ' ') +
      textHundreds
    ).trim();
  }
}

// text for numbers
const text = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eightteen'],
  [19, 'nineteen'],
  [20, 'twenty'],
  [30, 'thirty'],
  [40, 'forty'],
  [50, 'fifty'],
  [60, 'sixty'],
  [70, 'seventy'],
  [80, 'eighty'],
  [90, 'ninety'],
  [100, 'hundred'],
  [1000, 'thousand'],
  [1000000, 'million'],
  [1000000000, 'billion'],
  [1000000000000, 'trillion'],
]);

const addLeadingZeros = (input = []) => {
  const numbers = [...input];

  switch (numbers.length) {
    case 1:
      numbers.unshift(0);
      numbers.unshift(0);
      break;

    case 2:
      numbers.unshift(0);
      break;

    default:
      break;
  }
  return numbers;
};

// translates 000's into text
const translate = (numbers = []) => {
  return addLeadingZeros(numbers)
    .map((number, index, numbers) => {
      //hundreds position: append hundreds text and space when number exists
      if (index == 0) {
        return number != 0 ? text.get(number) + ' ' + text.get(100) + ' ' : '';
      }
      // tens position: multiply number by 10 to get the correct text
      if (index == 1) {
        return number != 0 ? text.get(number * 10) : '';
      }
      // ones position: prepend hyphen when tens position text exists
      if (index == 2) {
        if (number == 0) {
          return '';
        }
        return numbers[1] != 0 ? '-' + text.get(number) : text.get(number);
      }
    })
    .join('');
};
