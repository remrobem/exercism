export const rows = (count) => {

  let triangle = [];
  let prevRow = [1]; // initialize first row

  for (let i = 0; i < count; i++) {

    // push the next row to the returned array (triangle)
    triangle.push(prevRow);

    // format next row
    let newRow = [];

    // populate new (next) row from the row just added to the triangle
    prevRow.map((num, i) => {
      i === 0 ? newRow.push(1) : (newRow.push(num + prevRow[i - 1]));
    });

    // add the ending 1 to the next row
    newRow.push(1);
    // save the row for the next entry into the triangle (if needed)
    prevRow = [...newRow]

  }

  return triangle;
};
