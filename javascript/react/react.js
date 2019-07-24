/* eslint-disable no-console */
class InputCell {
    constructor(value) {
        this.value = value;
    }
}
InputCell.prototype.setValue = function (value) {
    this.value = value;
}

class ComputeCell {
    constructor(cells, func) {
        this.cells = cells;
        this.func = func;
        this.value = this.func(this.cells)
    }
   
}
// export { InputCell, ComputeCell }

// const inputCell = new InputCell(10);
// inputCell.setValue(20);
// console.log(inputCell.value);

const inputCell = new InputCell(1);
const fn = inputCells => inputCells[0].value + 1;
const computeCell = new ComputeCell([inputCell], fn);
console.log(computeCell.value);

