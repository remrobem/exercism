//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const recite = (initialBottlesCount, takeDownCount) => {

  let onWall = initialBottlesCount;
  let leftOnWall = onWall - 1;
  let onWallplural = 's';
  let leftOnWallPlural = 's';
  let response = [];

  const mainVerse = `
${onWall} bottle${onWallplural} of beer on the wall, ${onWall} bottle${onWallplural} of beer.
Take one down and pass it around, ${leftOnWall} bottle${leftOnWallPlural} of beer on the wall.`
  const lastVerse = `
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`

  for (let count = 0; count < takeDownCount; count++) {
    // leftOnWall = onWall - 1;
    if (leftOnWall == 0) {
      response.push(lastVerse);
      break;
    }
    onWallplural = onWall > 1 ? 's' : '';
    leftOnWallPlural = leftOnWall > 1 ? 's' : '';
    response.push(mainVerse);
    response.push('')
    onWall -= 1;
    leftOnWall -= 1;
    // console.log(mainVerse);
  }
  return response;
  // console.log(mainVerse);
  // console.log(lastVerse);
  // throw new Error("Remove this statement and implement this function");
};
