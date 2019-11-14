/* eslint-disable no-console */
class InputCell {
    constructor(value) {
        this.value = value;
        this.observers = [];
    }
    // setValue(value) {
    //     this.value = value;
    // }
}
InputCell.prototype.setValue = function(value) {
    this.value = value;
}
InputCell.prototype.subscribe = function(f) {
    this.observers.push(f);
  }

class ComputeCell {
    constructor(cells, func) {
        this.cells = cells;
        this.func = func;
        this.value = func(cells);
    }
}
// export { InputCell, ComputeCell }

    const inputCell = new InputCell(1);
    const computeCell = new ComputeCell(
      [inputCell],
      inputs => inputs[0].value + 1,
    );
    inputCell.setValue(3);
    console.log(computeCell.value);

//   const inputCell = new InputCell(10);
// inputCell.setValue(20);
// console.log(inputCell.value);


// const inputCell = new InputCell(1);
// const fn = inputCells => inputCells[0].value + 1;
// const computeCell = new ComputeCell([inputCell], fn);
// console.log(computeCell.value);

// const inputCells = [
//     new InputCell(1),
//     new InputCell(2),
//   ];

//   const computeCell = new ComputeCell(
//     inputCells,
//     inputs => inputs[0].value + inputs[1].value * 10,
//   );

// console.log(computeCell.value);

