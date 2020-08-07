
export const score = (dice, category) => {
  let points = 0;

  switch (category) {
    case 'ones':
      points = sumNumber(dice, 1);
      break;
    case 'twos':
      points = sumNumber(dice, 2);
      break;
    case 'threes':
      points = sumNumber(dice, 3);
      break;
    case 'fours':
      points = sumNumber(dice, 4);
      break;
    case 'fives':
      points = sumNumber(dice, 5);
      break;
    case 'sixes':
      points = sumNumber(dice, 6);
      break;
    case 'full house':
      points = fullHouse(dice);
      break;
    case 'four of a kind':
      points = fourOfAKind(dice);
      break;
    case 'little straight':
      points = littleStraight(dice);
      break;
    case 'big straight':
      points = bigStraight(dice);
      break;
    case 'choice':
      points = choice(dice);
      break;
    case 'yacht':
      points = yacht(dice);
      break;

    default:
      break;
  }

  return points;
  // throw new Error("Remove this statement and implement this function");
};

let sumNumber = (dice, category) => {
  return dice.reduce((sum, value) => {
    return value == category ? (sum += category) : sum;
  }, 0);
};

let fullHouse = (dice) => {
  // get unique values
  const uniqueValues = new Set(dice);
  // if 2 unique values, might be a full house
  if (uniqueValues.size == 2) {
    // if the count of first unique number is 2 or 3, then have full house
    const firstUniqueValue = uniqueValues.values().next().value;
    const reducer = (count, value) => {
      return value == firstUniqueValue ? (count += 1) : count;
    };
    const count = dice.reduce(reducer, 0);
    // sum the dice when full house
    return count == 2 || count == 3
      ? dice.reduce((sum, value) => {
          return (sum += value);
        }, 0)
      : 0;
  }
  // not 2 unique values
  return 0;
};

const fourOfAKind = (dice) => {
  // get unique values
  const uniqueValues = new Set(dice);

  // if more than 2 unique values, four of a kind not possible
  if (uniqueValues.size > 2) {
    return 0;
  }

  // function to determine if value is four of a kind
  const isFourOfAKind = (uniqueValue) => {
    const reducer = (count, value) => {
      return value == uniqueValue ? (count += 1) : count;
    };
    // count occurances of unique values
    return dice.reduce(reducer, 0) >= 4 ? true : false;
  };

  // for each unique value, determine which one is four of a kind
  for (let uniqueValue of uniqueValues) {
    if (isFourOfAKind(uniqueValue)) {
      return uniqueValue * 4;
    }
  }
  // just in case there is a fall thru
  return 0;
};

const straight = (dice) => {
  // 5 unique values must be a straight, return sorted array
  const uniqueValues = [...new Set(dice)].sort();
  // straight not possible if unique values not = 5
  if (uniqueValues.length != 5) {
    return false;
  }
  // check if values are sequential
  const isSequential = uniqueValues.every((value, index) => {
    return (
      index === uniqueValues.length - 1 || value + 1 == uniqueValues[index + 1]
    );
  });

  return isSequential ? uniqueValues : [];
};

// straight that starts with 1
const littleStraight = (dice) => {
  const uniqueValues = straight(dice);
  return uniqueValues[0] == 1 ? 30 : 0;
};

// straight that starts with 2
const bigStraight = (dice) => {
  return straight(dice)[0] == 2 ? 30 : 0;
};

// sum the dice values
const choice = (dice) => {
  return dice.reduce((sum, value) => {
    return (sum += value);
  }, 0);
};

// only one unique number
const yacht = (dice) => {
  return new Set(dice).size == 1 ? 50 : 0;
};

// console.log(score([3, 3, 3, 3, 3], 'yacht'));
