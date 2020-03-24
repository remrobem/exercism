export class Song {

  verse(animal) {
    // return the single verse requested
    return this.verses(animal, animal);
  }

  verses(from, to) {

    // validate input
    if (to < 0 || to < from || from < 0 || !Number.isInteger(from) || !Number.isInteger(to)) {
      throw new Error("Invalid request");
    }

    // get all the verses requested
    let verses = this.buildVerses(from, to);

    const stringify = (lines, line) => lines += line
    return verses.reduce(stringify, '');
  }

  buildVerses(from, to) {

    const animals = [
      {
        animal: 'fly',
        line2: "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      },
      {
        animal: 'spider',
        line1: 'It wriggled and jiggled and tickled inside her.\n',
      },
      {
        animal: 'bird',
        line1: 'How absurd to swallow a bird!\n',
        line2: ' that wriggled and jiggled and tickled inside her',
      },
      {
        animal: 'cat',
        line1: 'Imagine that, to swallow a cat!\n',
      },
      {
        animal: 'dog',
        line1: 'What a hog, to swallow a dog!\n',
      },
      {
        animal: 'goat',
        line1: 'Just opened her throat and swallowed a goat!\n',
      },
      {
        animal: 'cow',
        line1: "I don't know how she swallowed a cow!\n",
      },
      {
        animal: 'horse',
        line1: "She's dead, of course!\n",
      },
    ];

    const firstLine = "I know an old lady who swallowed a ";

    const verses = [];

    animals.map((animal, index) => {

      // only push to verses array if in the range of verses to return
      if (index + 1 >= from && index + 1 <= to) {

        verses.push(firstLine + animal.animal + '.\n');

        if (animal.line1) verses.push(animal.line1);

        // print the 'swallowed' lines for prior animals except for last animal
        // the first entry has a non standard line, no formating needed
        for (let i = index; i >= 0 && index < animals.length - 1; i--) {
          let append = animals[i].line2 || '';
          i === 0 ?
            verses.push(append) :
            verses.push('She swallowed the ' + animals[i].animal + ' to catch the ' + animals[i - 1].animal + append + '.\n');
        }

        // blank line between verses only when more than 1 verse requested
        if (from != to) verses.push('\n');
      }
    })

    return verses;
  }
}