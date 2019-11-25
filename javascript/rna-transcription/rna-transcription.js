export const toRna = (dna) => {

  // initialize value to return
  let rna = '';
  // nucleotide transcription
  let transcription = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  // translate nucleotide values
  for (let nucleotide of dna) {
    if (!Object.prototype.hasOwnProperty.call(transcription, nucleotide)) {
      throw new Error(`Invalid nucleotide: ${nucleotide}`);
    }
    rna += transcription[nucleotide];
  }

  return rna;
};
