export const saddlePoints = (points) => {

// get max value for every row
  let rowMax = points.map(row => {
    return row.reduce((max, point) => {
      return point > max ? point : max;
    }, 0)
  });

  // get min value for each col by transposing points and find min in each row
  let transposed = points[0].map((col, i) => points.map(row => row[i]));

  let colMin = transposed.map(column => {
    return column.reduce((max, point) => {
      return point < max ? point : max;
    }, Infinity)
  });

  let saddlePoints = [];

  // for each point, see if it the column minimum value and row max value
  points.map((row, rowIndex) => {
    row.map((point, colIndex) => {
      if (point === colMin[colIndex] && point === rowMax[rowIndex]) {
        saddlePoints.push(
          {
            'row': rowIndex + 1,
            'column': colIndex + 1
          }
        )
      }
    })
  });

return saddlePoints;

};
