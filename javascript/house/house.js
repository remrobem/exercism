const verseDefinitions = [
  { subject: 'house that Jack built.', verb: 'lay in' },
  { subject: 'malt', verb: 'ate' },
  { subject: 'rat', verb: 'killed' },
  { subject: 'cat', verb: 'worried' },
  { subject: 'dog', verb: 'tossed' },
  { subject: 'cow with the crumpled horn', verb: 'milked' },
  { subject: 'maiden all forlorn', verb: 'kissed' },
  { subject: 'man all tattered and torn', verb: 'married' },
  { subject: 'priest all shaven and shorn', verb: 'woke' },
  { subject: 'rooster that crowed in the morn', verb: 'kept' },
  { subject: 'farmer sowing his corn', verb: 'belonged to' },
  { subject: 'horse and the hound and the horn', verb: '' },
];

export class House {
  static getVerses = (startVerse, endVerse) => {
    let verses = [];
    // set start and end verses
    startVerse -= 1;
    endVerse = endVerse ? endVerse - 1 : startVerse;

    // build the first line of the requested verse, 
    // then the remainder of the lines in the verse
    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(`This is the ${verseDefinitions[i].subject}`);
      for (let j = i - 1; j >= 0; j--) {
        verses.push(
          `that ${verseDefinitions[j].verb} the ${verseDefinitions[j].subject}`
        );
      }
      // add blank line after every verse except the last verse
      if (i != endVerse) {
        verses.push('');
      }
    }
    return verses;
  };

  static verse(verse) {
    return this.getVerses(verse);
  }

  static verses(startVerse, endVerse) {
    return this.getVerses(startVerse, endVerse);

  }
}
