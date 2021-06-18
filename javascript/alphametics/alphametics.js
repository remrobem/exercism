//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const parsePuzzle = (puzzle) => {
    //  get rid of + == and create nested array of puzzle
    const parsedPuzzle = puzzle
      .replace(/[+=]/g, '') // string with + and == removed.
      .split(/[ ]+/g) // split the string on space into array
      .map((string) => string.split('')); // split operand and sum into arrays (AB = ['A', 'B'])

    // return the sum value(last array entry) and the operands
    return [parsedPuzzle.pop(), parsedPuzzle];
  };

  // array of unique alphas used in the puzzle
  const getUniqueAlphas = (sumAlpha, operandsAlpha) => {
    return [...new Set([...sumAlpha, ...operandsAlpha.flat()])];
  };

  // the sum is an array and operands are a nested array
  const [sumAlpha, operandsAlpha] = parsePuzzle(puzzle);

  const uniqueAlphas = getUniqueAlphas(sumAlpha, operandsAlpha);
  const countUniqueAlphas = uniqueAlphas.length;
  const maxCounter = +'9'.padStart(countUniqueAlphas, '9');

    // console.log(`uniqueAlphas: ${uniqueAlphas}`);


  let counter = '1'.padStart(countUniqueAlphas, '0');

  console.log(`uniqueAlphas: ${uniqueAlphas}`)
  console.log(`sumAlpha: ${sumAlpha}`)

 

  // console.log(`sumValue: ${sumValue}`)

  const findAnswer = () => {
    // change
    const operandValues = operandsAlpha.map((operand) => {
      return operand.map((alpha) => {
        const alphaIndex = uniqueAlphas.indexOf(alpha);
        const alphaValue = counter.charAt(alphaIndex);
        return alphaValue;
      });
    });

    const sumValue = sumAlpha.map( (alpha) => {
      const alphaIndex = uniqueAlphas.indexOf(alpha);
      return counter.charAt(alphaIndex);
    })

    console.log(`operandValues: ${operandValues.join('')} sumValue: ${sumValue.join('')}`);
    // return test;
    counter = +counter + 1;
    counter = counter.toString().padStart(countUniqueAlphas, '0');
    // console.log(`counter: ${counter}`);
    if (+counter > +maxCounter) {
      return 'over';
      // throw new Error('No solutiuon found');
    }
    return findAnswer();
  };
  console.log(findAnswer());

  // throw new Error('Remove this statement and implement this function');
};
