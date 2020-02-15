
export const square = (numberOfSquares) => {
  if (numberOfSquares < 1 || numberOfSquares > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return BigInt(Math.pow(2,numberOfSquares - 1));
};

export const total = () => {
  // create array with numbers 1,2,3,4,....64, reduce it to sum of square for each number
  return [...[...Array(64).keys()]].reduce((sum, value) => {
    return sum += BigInt(Math.pow(2,value));
  },BigInt(0));
};
