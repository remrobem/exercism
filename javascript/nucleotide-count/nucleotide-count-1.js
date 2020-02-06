export class NucleotideCounts {
    static parse(sequence) {
      if (/[^ACGT]/.test(sequence))
        throw new Error("Invalid nucleotide in strand");
      const counts = { A: 0, C: 0, G: 0, T: 0 };
      sequence.split("").forEach(c => counts[c]++);
      return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
    }
  }