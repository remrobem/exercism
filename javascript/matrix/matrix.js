export class Matrix {
  constructor(string) {
    this.string = string;
  }

  get rows() {
    return this.buildRows(this.string);
  }

  get columns() {
    let rows = this.buildRows(this.string);
    // transpose rows so columns are now rows
    return rows[0].map((col, i) => rows.map(row => row[i]));
  }

  buildRows(string) {

    // 2 dim array of the matrix string
    let rows = [];
    string.split('\n').map((row) => {
      rows.push((row.split(' ')));
    })
    // convert strings to numbers in the inner array
   return rows.map((row) => row.map((number) => Number(number)));
  }

}