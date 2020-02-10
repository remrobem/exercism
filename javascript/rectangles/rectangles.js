//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// array
// expected = 5
// const actual = Rectangles.count([
//   '  +-+',
//   '  | |',
//   '+-+-+',
//   '| | |',
//   '+-+-+',
// ]);

//   '  |-|',
//   '  | |',
//   '|-|-|',
//   '| | |',
//   '|-|-|',

// expected = 2;
// const actual = Rectangles.count([
//   '  +-+',
//   '  | |',
//   '+-+-+',
//   '| |  ',
//   '+-+  ',
// ]);

//   '  |-|',
//   '  | |',
//   '|-|-|',
//   '| |  ',
//   '|-|  ',


// expected = 60;
// const actual = Rectangles.count([
//   '+---+--+----+',
//   '|   +--+----+',
//   '+---+--+    |',
//   '|   +--+----+',
//   '+---+--+--+-+',
//   '+---+--+--+-+',
//   '+------+  | |',
//   '          +-+',
// ]);

//   '|---|--|----|',
//   '|   |--|----|',
//   '|---|--|    |',
//   '|   |--|----|',
//   '|---|--|--|-|',
//   '|---|--|--|-|',
//   '|------|  | |',
//   '          |-|',



// loop entry
// find +
// keep going right looking for - or +
//    when -  keep going
//    when space - forget first +, keep looking right for +
//    when + 
//      have pair
//      go down col for each looking for connectors
//      if both + then add 1 to count
//      when hit space for either, then start over on current row looking right
// 

class Rectangles {
  // export class Rectangles {
  static count(array) {

    let rectangleCount = 0;
    if (array.length == 0) {
      return rectangleCount;
    }

    // 2-dim array of the input
    let rectangles = [];
    array.map((row) => {
      rectangles.push(row.split(''));
    })
    let transposed = false;
    rectangleCount += findMatch(rectangles, transposed);

    // rectangles.map((row, rowIndex) => {
    //   row.map((column, columnIndex) => {
    //     if (column == '+') {
    //       let topSide = '';
    //       // look for a line representing top of a rectangle - will not have any spaces
    //       for (let i = columnIndex; i < row.length; i++) {
    //         topSide = row[i] == '+' || row[i] == '-'
    //           ? topSide + row[i]
    //           : '';
    //         // have a line that ends with +, see if it matches the top of the rectangle
    //         if (topSide.length > 1 && row[i] == '+') {
    //           rectangleCount += countMatchingColumns(topSide, rowIndex, columnIndex, rectangles);
    //           topSide = row[i];
    //           // i = row.length
    //         }
    //       }
    //     }
    //   })
    // })
    console.log('rectangleCount:', rectangleCount);
    // now, need to do same, except need to do for col and only count 2 bottom
    // transpose the array
    rectangles = rectangles[0].map((col, i) => rectangles.map(row => {
      row[i] = row[i] == '|' ? "-" : row[i] == '-' ? '|' : row[i];
      return row[i]
    }));

    transposed = true;
    rectangleCount += findMatch(rectangles, transposed);

    // rectangles.map((row, rowIndex) => {
    //   row.map((column, columnIndex) => {
    //     // look for a line representing top of a rectangle - will not have any spaces
    //     if (column == '+') {
    //       let topSide = '';
    //       let skipFirstmatch = transposed;
    //       for (let i = columnIndex; i < row.length; i++) {
    //         topSide = row[i] == '+' || row[i] == '-'
    //           ? topSide + row[i]
    //           : '';
    //         // have the top of a rectangle, find bottom of rectangle
    //         // end of a line when hit a +
    //         if (topSide.length > 1 && row[i] == '+') {
    //           if (!skipFirstmatch) {
    //             rectangleCount += countMatchingColumns(topSide, rowIndex, columnIndex, rectangles, transposed);
    //             topSide = row[i];
    //             // i = row.length
    //           } else {
    //             skipFirstmatch = false;
    //           }
    //         }
    //       }
    //     }
    //   })
    // })
    console.log('rectangleCount:', rectangleCount);


    return rectangleCount;

    function findMatch(rectangles, transposed) {
      let matches = 0;
      rectangles.map((row, rowIndex) => {
        row.map((column, columnIndex) => {
          // look for a line representing top of a rectangle - will not have any spaces
          if (column == '+') {
            let topSide = '';
            let skipFirstmatch = transposed;
            for (let i = columnIndex; i < row.length; i++) {
              topSide = row[i] == '+' || row[i] == '-'
                ? topSide + row[i]
                : '';
              // have the top of a rectangle, find bottom of rectangle
              // end of a line when hit a +
              if (topSide.length > 1 && row[i] == '+') {
                if (!skipFirstmatch) {
                  matches += countMatchingColumns(topSide, rowIndex, columnIndex, rectangles, transposed);
                  topSide = row[i];
                  // i = row.length
                } else {
                  skipFirstmatch = false;
                }
              }
            }
          }
        })
      })
      return matches;
    }

    function countMatchingColumns(topSide, rowIndex, columnIndex, rectangles) {
      let matches = 0;
      const matchSide = formatSide(topSide);

      // looking for bottom side(s) to a rectangle.
      // for each row, get string from same column and length and compare to top of rectangle
      for (let iRow = rowIndex + 1; iRow < rectangles.length; iRow++) {
        // get a row to compare and create var that has same positions as the top of the rectangle

        let rectangleRowCompare = formatSide(rectangles[iRow]
          .join('')
          .slice(columnIndex, columnIndex + matchSide.length)
        );

        // side can only have + or | 
        if (['+', '|'].includes(rectangleRowCompare[0]) && ['+', '|'].includes(rectangleRowCompare[rectangleRowCompare.length - 1])) {
          if (rectangleRowCompare == matchSide) {
            matches += 1;
          }
        } else {
          iRow = rectangles.length;
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
console.log('Answer: ', Rectangles.count([
  '  +-+',
  '  | |',
  '+-+-+',
  '| |  ',
  '+-+  ',
])
);

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