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

// class Rectangles {
export class Rectangles {
  static count(array) {

    let rectangleCount = 0;
    if (array.length == 0) {
      return rectangleCount;
    }
    // 2-dim array of the input
    const rectangles = []
    array.map((row) => {
      row = row.replace(/\+/g, '|');
      rectangles.push(row.split(''));
    })
    // console.log(rectangles)



    // make all + = |
    // by row
    //  find | 
    //    find string that has - or |
    //    if string found
    //      search down all rows looking for same value in same positions
    //      when found rectangle count +1
    //  starting at last | found, do same above
    // transpose array
    // do same thing again except do not count 1st one found: already counted
    rectangles.map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        if (column == '|') {
          let topSide = column;
          // look for a line representing top of a rectangle - will not have any spaces
          for (let i = columnIndex + 1; i < row.length; i++) {
            topSide = row[i] == '|' || row[i] == '-'
              ? topSide + row[i]
              : '';
            // have a line that ends with |, see if it matches the top of the rectangle
            if (topSide.length > 1 && row[i] == '|') {
              rectangleCount += countMatchingColumns(topSide, rowIndex, columnIndex, rectangles);
              topSide = '|';
              i = row.length
            }
          }
        }
      })
    })

    // now, need to do same, except need to do for col and only count 2 bottom
    const rectanglesTransposed = rectangles[0].map((col, i) => rectangles.map(row => row[i]));
    // console.log(rectanglesTransposed);

    rectanglesTransposed.map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        const transposed = true;
        // look for a line representing top of a rectangle - will not have any spaces
        if (column == '|') {
          let topSide = column;
          for (let i = columnIndex + 1; i < row.length; i++) {
            topSide = row[i] == '|' || row[i] == '-'
              ? topSide + row[i]
              : '';
            // have the top of a rectangle, find bottom of rectangle
            if (topSide.length > 1 && row[i] == '|') {
              rectangleCount += countMatchingColumns(topSide, rowIndex, columnIndex, rectangles, transposed);
              topSide = '|';
              i = row.length
            }
          }
        }
      })
    })


    return rectangleCount;

    function countMatchingColumns(bottomSide, rowIndex, columnIndex, rectangles, skipFirstMatch = false) {
      let matchCount = 0;
      // looking for a bottom side(s) to a rectangle.
      // for each row, get string from some column and length and compare to top of rectangle
      for (let iRow = rowIndex + 1; iRow < rectangles.length; iRow++) {
        let rectangleRow = rectangles[iRow].join('');
        let rectangleRowCompare = rectangleRow.slice(columnIndex, columnIndex + bottomSide.length);

        // matchCount = rectangleRowCompare == bottomSide  && skipFirstMatch == false ? (matchCount + 1, skipFirstMatch = false) : matchCount;

        if (rectangleRowCompare == bottomSide) {
          if (skipFirstMatch == true) {
            skipFirstMatch == true;
          } else {
            matchCount += 1;
          }
        }

        //
        // if (rectangleRowCompare == bottomSide) {
        //   console.log('match:', bottomSide,'rowIndex', rowIndex, 'columnIndex', columnIndex, 'irow', iRow,)
        // }
        //
      }
      return matchCount;
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
