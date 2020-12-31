
export const translate = (rna = '') => {

  const codons = new Map([
    ['AUG', 'Methionine'],
    ['UUU', 'Phenylalanine'],
    ['UUC', 'Phenylalanine'],
    ['UUA', 'Leucine'],
    ['UUG', 'Leucine'],
    ['UCU', 'Serine'],
    ['UCC', 'Serine'],
    ['UCA', 'Serine'],
    ['UCG', 'Serine'],
    ['UAU', 'Tyrosine'],
    ['UAC', 'Tyrosine'],
    ['UGU', 'Cysteine'],
    ['UGC', 'Cysteine'],
    ['UGG', 'Tryptophan'],
    ['UAA', 'STOP'],
    ['UAG', 'STOP'],
    ['UGA', 'STOP'],
  ]);

  const proteins = [];

  // get each 3 char codec and look up in codons map
  for (let i = 0; i < rna.length; i += 3) {

    const proteinName = codons.get(rna.substring(i, i+3));

    if (!proteinName) {
      throw new Error('Invalid codon');
    }

    if (proteinName === 'STOP') {
      break;
    }

    proteins.push(proteinName);
  }

  return proteins;
};
