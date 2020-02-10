
// class Rectangles {
export class Rectangles {
  static count(array) {

    let rectangleCount = 0;
    if (array.length == 0) {
      return rectangleCount;
    }

    // 2-dim array of the input
    let rectangles = [];
    array.map(row => rectangles.push(row.split('')));

    let transposed = false;
    rectangleCount += findMatch(rectangles, transposed);

    // now, need to do same, except need to do for col and only count 2 bottom
    // transpose the array
    rectangles = rectangles[0].map((col, i) => rectangles.map(row => {
      row[i] = row[i] == '|' ? "-" : row[i] == '-' ? '|' : row[i];
      return row[i]
    }));

    transposed = true;
    rectangleCount += findMatch(rectangles, transposed);

    return rectangleCount;

    function findMatch(rectangles, transposed) {
      let matches = 0;
      let topSide = '';

      rectangles.map((row, rowIndex) => {

        row.map((column, columnIndex) => {
          // look for a line representing top of a rectangle - will not have any spaces
          if (column == '+') {
            // let topSide = '';
            let skipFirstmatch = transposed;
            const matchesHold = matches;

            for (let i = columnIndex; i < row.length; i++) {

              topSide = row[i] == '+' || row[i] == '-'
                ? topSide + row[i]
                : '';
              // when find end of a top line for a rectangle, find bottom of rectangle
              if (topSide.length > 1 && row[i] == '+') {
                // const matchesHold = matches;
                matches += countMatchingBottom(topSide, rowIndex, columnIndex, rectangles);
                // if (skipFirstmatch && matches != matchesHold) {
                //   matches -= 1
                //   skipFirstmatch = false;
                // }
              }
            }
            if (skipFirstmatch && matches != matchesHold) {
              matches -= 1
              skipFirstmatch = false;
            }
          }
        })
      })
      return matches;
    }

    function countMatchingBottom(topSide, rowIndex, columnIndex, rectangles) {
      let matches = 0;
      const matchSide = formatSide(topSide);

      // looking for bottom side(s) to a rectangle.
      // for each row, get string from same column and length and compare to top of rectangle
      for (let iRow = rowIndex + 1; iRow < rectangles.length; iRow++) {
        // side can only have + or | 
        // get a row to compare and create var that has same positions as the top of the rectangle
        let rectangleRowCompare = formatSide(rectangles[iRow]
          .join('')
          .slice(columnIndex, columnIndex + matchSide.length)
        );

        if (['+', '|'].includes(rectangleRowCompare[0]) && ['+', '|'].includes(rectangleRowCompare[rectangleRowCompare.length - 1])) {
          if (rectangleRowCompare == matchSide) {
            matches += 1;
          }
        } else {
          iRow = rectangles.length;
          break;
        }
      }

      return matches;
    }

    // change imbedded + to - to handle top/bottom with rectangles of different sizes
    function formatSide(side) {
      return side.split('').map((char, index) => {
        if (index == 0 || index == side.length - 1) {
          return char
        }
        return '-';
      }).join('');
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