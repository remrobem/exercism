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
      let top = '';
      // search each row for a string that represents the top row of a rectangle (+ on both ends)
      // When found, search every row below for valid sides to a rectangle and then bottom(s) of a rectangle
      // the string found may be the top of multiple rectangles
      // and the row may contain the top of more than one rectangle
      rectangles.map((row, topRow) => {
        row.map((_, topColumn) => {
          for (let i = topColumn; i < row.length && (row[i] == '+' || row[i] == '-'); i++) {
            top += row[i];
            // when find end of a top line for a rectangle, find any/all of the bottoms of a rectangle
            matches = top.length > 1 && row[i] == '+'
              ? matches + countMatchingBottoms(top, topRow, topColumn, rectangles)
              : matches
          }
          top = '';
        })
      })
      return matches;
    }

    // a potential top of a rectangle has been found, need to find any/all the bottoms
    function countMatchingBottoms(top, topRow, topColumn, rectangles) {
      const topSide = formatSide(top);
      let matches = 0;
      let rowCompare = '';
      // for each row, get string from same column and length and compare to top of rectangle
      for (let row = topRow + 1; row < rectangles.length; row++) {
        rowCompare = formatSide(rectangles[row]
          .join('')
          .slice(topColumn, topColumn + topSide.length)
        );
        // ends/sides of a rectangle must be + or |
        if (!['+', '|'].includes(rowCompare[0]) || !['+', '|'].includes(rowCompare[rowCompare.length - 1])) {
          break;
        }
        matches = rowCompare == topSide ? matches + 1 : matches;
      }
      return matches;
    }

    // change imbedded (not first or last) + to - to handle top/bottom with + as the corner of another rectangle
    function formatSide(side) {
      return side
        .split('')
        .map((char, index) => index == 0 || index == side.length - 1 ? char : '-')
        .join('');
    }
  }
}