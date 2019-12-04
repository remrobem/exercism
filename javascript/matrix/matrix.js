export class Matrix {
  constructor(string) {
    this.string = string;
  }

  get rows() {
    return this._rows ? this._rows : this.buildRows(this.string);
  }

  get columns() {
    return this._columns ? this._columns : this.buildColumns();
  }

  buildRows(string) {
    // 2 dim array of the matrix string
    let rows = [];
    string.split('\n').map((row) => {
      rows.push((row.split(' ')));
    })
    // convert strings to numbers in the inner array
    return rows.map((row) => row.map(Number));
  }

  buildColumns() {
    // rows array required to determine columns
    this._rows = this._rows ? this._rows : this.buildRows(this.string);

    // transpose rows so columns are now rows
    return this._rows[0].map((col, i) => this._rows.map(row => row[i]));
  }

}