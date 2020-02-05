'use strict';

class InputCell {
    constructor(value) {
        this.value = value;
    }
    setValue(setValue) {
        this.value = setValue;
    }
}

class ComputeCell extends InputCell {
    constructor(inputCell, func) {
        super();
        this.value = func(inputCell);
    }
}

export { InputCell, ComputeCell }