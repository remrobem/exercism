//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {

  // initialize value to return
  let rna = '';

  // translate nucleotide values
  for (let nucleotide of dna) {
    switch (nucleotide) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        throw new Error('Invalid nucleotide');
    }
  }
  return rna;
};
