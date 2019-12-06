// input is an object with key values being arrays, example: { 1: ['A', 'E'], 2: ['D', 'G'] } ]
export const transform = (input) => {

  // create array of input object values
  const entries = Object.entries(input);

  let transformed = {};

  // create object with each letter:points pair
  entries.map( ( [points, letters] ) =>  {
   letters.map(letter => {
      transformed[letter.toLowerCase()] = Number(points);
    });
  })

  return transformed;
};
