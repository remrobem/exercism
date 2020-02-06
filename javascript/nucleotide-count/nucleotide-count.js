'use strict';

export class NucleotideCounts {
  static parse(string) {

    // look for any invalid characters
    if (string.match(/[^ACGT]/)) {
      throw new Error("Invalid nucleotide in strand");
    }

    // split the string into an array one time
    const stringArray = string.split('');

    // return the counts of each nucleotide
    return stringArray.filter(item => item == 'A').length + ' '
      + stringArray.filter(item => item == 'C').length + ' '
      + stringArray.filter(item => item == 'G').length + ' '
      + stringArray.filter(item => item == 'T').length
  }
}
