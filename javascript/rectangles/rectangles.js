
// class Rectangles {
export class Rectangles {
  static count(array) {
    if (array.length == 0) {
      return 0;
    }
    // 2-dim array of the input
    let rectangles = [];
    array.map(row => rectangles.push(row.split('')));

    return findMatchByColumn(rectangles);

    function findMatchByColumn(rectangles) {
      let matches = 0;
      let topSide = '';
      rectangles.map((row, rowIndex) => {
        row.map((_, columnIndex) => {
          // look for a line representing top of a rectangle, will have + on each end and - or + in between
          // this wioll find all rectangles where the string is the top
          for (let i = columnIndex; i < row.length && (row[i] == '+' || row[i] == '-'); i++) {
            topSide += row[i];
            // when find end of a top line for a rectangle, find any/all of the bottoms of a rectangle
            matches = topSide.length > 1 && row[i] == '+'
              ? matches + countMatchingBottom(topSide, rowIndex, columnIndex, rectangles)
              : matches
          }
          topSide = '';
        })
      })
      return matches;
    }

    // a potential top of a recatngle has been found, need to find any/all the bottoms
    function countMatchingBottom(topSide, rowIndex, columnIndex, rectangles) {
      const matchSide = formatSide(topSide);
      let matches = 0;
      let rectangleRowCompare = '';
      // for each row, get string from same column and length and compare to top of rectangle
      for (let row = rowIndex + 1; row < rectangles.length; row++) {
        rectangleRowCompare = formatSide(rectangles[row]
          .join('')
          .slice(columnIndex, columnIndex + matchSide.length)
        );

        // ends/sides of a rectangle between top and bottom must be + or -
        if (!['+', '|'].includes(rectangleRowCompare[0]) || !['+', '|'].includes(rectangleRowCompare[rectangleRowCompare.length - 1])) {
          break;
        }
        matches = rectangleRowCompare == matchSide ? matches + 1 : matches;
      }
      return matches;
    }

    // change imbedded (not first or last) + to - to handle top/bottom with rectangles of different sizes
    function formatSide(side) {
      return side
        .split('')
        .map((char, index) => index == 0 || index == side.length - 1 ? char : '-')
        .join('');
    }
  }
}
// console.log('Answer: ', Rectangles.count([
//   '  +-+',
//   '  | |',
//   '  +-+',
//   '  +-+',
//   '  | |',
//   '  +-+',
// ])
// );

// console.log('Answer: ', Rectangles.count([
//   '  +-+',
//   '  | |',
//   '+-+-+',
//   '| | |',
//   '+-+-+',
// ])
// );

// console.log('Answer: ', Rectangles.count([
//   '  +-+',
//   '    |',
//   '+-+-+',
//   '| | -',
//   '+-+-+',
// ])
// );


// const expected = 3;
// console.log('Answer: ', Rectangles.count([
//   '+------+----+',
//   '|      |    |',
//   '+---+--+    |',
//   '|   |       |',
//   '+---+-------+',
// ])
// );

// const expected = 2;
// console.log('Answer: ', Rectangles.count([
//   '  +-+',
//   '  | |',
//   '+-+-+',
//   '| |  ',
//   '+-+  ',
// ])
// );

// expected = 60;
// console.log('Answer: ', Rectangles.count([
//   '+---+--+----+',
//   '|   +--+----+',
//   '+---+--+    |',
//   '|   +--+----+',
//   '+---+--+--+-+',
//   '+---+--+--+-+',
//   '+------+  | |',
//   '          +-+',
// ])
// );