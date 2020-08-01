//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// This is the house that Jack built.

// This is the malt
// that lay in the house that Jack built.

// This is the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

const verseDefinitions = [
  { noun: 'house that Jack built', verb: 'lay in' },
  { noun: 'malt', verb: 'ate' },
  { noun: 'rat', verb: 'killed' },
  { noun: 'cat', verb: 'worried' },
  { noun: 'dog', verb: 'tossed' },
  { noun: 'cow with the crumpled horn', verb: 'milked' },
  { noun: 'maiden all forlorn', verb: 'kissed' },
  { noun: 'man all tattered and torn', verb: 'married' },
  { noun: 'priest all shaven and shorn', verb: 'woke' },
  { noun: 'rooster that crowed in the morn', verb: 'kept' },
  { noun: 'farmer sowing his corn', verb: 'belonged' },
  { noun: 'horse and the hound and the horn', verb: '' },

];

let verses = [];
let verse = [];

for (let i = 0; i < verseDefinitions.length; i++) {
  // console.log(`i - This is the ${verseDefinitions[i].noun}`);
  verse.push(`This is the ${verseDefinitions[i].noun}`);

  for (let j = i - 1; j >= 0; j--) {
    // console.log(
    //   `j - that ${verseDefinitions[j].verb} the ${verseDefinitions[j].noun}`
    // );
    verse.push(
      `that ${verseDefinitions[j].verb} the ${verseDefinitions[j].noun}`
    );
  }
  verses.push(verse);
  verse = [];
}

console.log(verses)

class House {
  // export class House {

  static verse() {
    // console.log(verseDefinitions[1].noun);
    // throw new Error("Remove this statement and implement this function");
  }

  static verses() {
    // throw new Error("Remove this statement and implement this function");
  }
}

console.log(House.verse());
