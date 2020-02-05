export const recite = (initialBottlesCount, takeDownCount) => {

  let onWall = initialBottlesCount;
  const response = [];

  const lastVerse1 = 'No more bottles of beer on the wall, no more bottles of beer.'
  const lastVerse2 = 'Go to the store and buy some more, 99 bottles of beer on the wall.'

  for (let count = 0; count < takeDownCount; count++, onWall--) {

    if (onWall == 0) {
      response.push(lastVerse1, lastVerse2);
      return response;
    }
   
    // used a variable becuse it is referenced multiple time in template literal
    const onWallplural = onWall > 1 ? 's' : '';

    // these template literals need to the defined in for loop so the vaaiables get recalculated
    let mainVerse1 = `${onWall} bottle${onWallplural} of beer on the wall, ${onWall} bottle${onWallplural} of beer.`
    let mainVerse2 = `Take ${onWall == 1 ? 'it' : 'one'} down and pass it around, ${onWall - 1 == 0 ? 'no more' : onWall - 1} bottle${onWall - 1 > 1 ? 's' : onWall - 1 == 0 ? 's' : ''} of beer on the wall.`

    response.push(mainVerse1, mainVerse2);

    // push blank line if not the last line
    count != takeDownCount - 1 && response.push('');

    // remove a beer from the wall (onWall) done it the for loop definition
  }
  return response;
};
