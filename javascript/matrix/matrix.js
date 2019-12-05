export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this._rows = this._rows || this.buildRows(this.matrix);
  }

  get columns() {
    return this._columns = this._columns || this.buildColumns();
  }

  buildRows(matrix) {
    // 2 dim array of the matrix matrix with  matrixs converted to numbers
    return matrix.split('\n').map(row => row.split(' ').map(Number));
  }

  buildColumns() {
    // rows array required to determine columns
    this.rows;
    // transpose rows so columns are now rows
    return this._rows[0].map((col, i) => this._rows.map(row => row[i]));
  }
}