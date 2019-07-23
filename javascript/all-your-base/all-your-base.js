

export const convert = (numArray = [], fromBase, toBase) => {
    "use strict";
    // validate base values
    if (fromBase < 2 || !Number.isInteger(fromBase)) {
        throw 'Wrong input base'
    }
    if (toBase < 2 || !Number.isInteger(toBase)) {
        throw 'Wrong output base'
    }
    // validate number array
    if (numArray.length == 0 || (numArray[0] == 0 && numArray.length > 1)) {
        throw 'Input has wrong format'
    }
    if ((numArray.filter((value) => {
        if (value >= fromBase || value < 0 || isNaN(value)) return true
    })).length != 0
    ) {
        throw 'Input has wrong format'
    }
    // number array = [0] always returns [0]
    if (numArray.length == 1 && numArray[0] == 0) {
        return [0];
    }
    // convert from original base to decimal base 10
    let base10 = numArray
        .reduce((value, current, index) => {
            return value + (current * (Math.pow(fromBase, (numArray.length - 1) - index)));
        }, 0);

    // convert decimal base 10 to new base
    let toBaseValueArray = [];
    for (let i = 10; i >= 0; i--) {
        let toBaseValue = Math.floor(base10 / Math.pow(toBase, i));
        if (toBaseValue > 0 || (toBaseValue == 0 && toBaseValueArray.length > 0)) {
            toBaseValueArray.push(toBaseValue);
        }
        if (toBaseValue > 0) {
            let remainder = base10 % Math.pow(toBase, i);
            base10 = toBaseValue - (Math.floor(base10 / Math.pow(toBase, i))) + remainder;
        }
    }
    return toBaseValueArray;
};