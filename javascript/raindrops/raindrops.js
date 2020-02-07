'use strict';

export const convert = (number) => {

  let output = '';

  if (number % 3 == 0) {
    output = output.concat('Pling');
  }

  if (number % 5 == 0) {
    output = output.concat('Plang');
  }

  if (number % 7 == 0) {
    output = output.concat('Plong');
  }

  if (!output) {
    output = output.concat(number);
  }
  return output;
};
