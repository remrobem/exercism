'use strict';

function InputCell(value) {

    this.value = value;

    // this.setValue = function (value) {
    //     this.value = value;
    //     return this.value
    // }

    this.setValue = function (value) {
        return this.computeCell()
    }

    this.get = function () {
        return this.value;
    }
   
}

function ComputeCell (inputCell, fn) {

    this.inputCell = inputCell;
        this.fn = fn;
        this.value = this.fn(this.inputCell);

}


// class InputCell {
//     constructor(value) {
//         this._value = value;
//     }
//     setValue(setValue) {
//         this._value = setValue;
//     }
//     get value() {
//         return this._value;
//     }
// }

// class ComputeCell  {
//     constructor(inputCell, func) {
//         this._inputCell = inputCell;
//         this._func = func;
//         this._value = this._func(this._inputCell);
//     }

//     return this_value;

//     // get value() {
//     //     return this._value
//     // }

//     // set value(setValue) {
//     //     this._value = setValue;
//     // }
// }

export { InputCell, ComputeCell }