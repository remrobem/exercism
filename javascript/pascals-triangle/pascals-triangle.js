export const rows = (count) => {

  let triangle = [];
  let nextRow = [1]; // initialize first row

  for (let i = 0; i < count; i++) {

    // push the next row to the returned array (triangle)
    if (nextRow.length > 0) {
      triangle.push(nextRow);
    }

    // format next row
    let newRow = [];

    // build 
    nextRow.map((num, i) => {
      i === 0 ? newRow.push(1) : (newRow.push(num + nextRow[i - 1]));
    });
    // add the ending 1 to the next row
    newRow.push(1);

    nextRow = [];
    nextRow.push(...newRow);

  }
  return triangle;
};
