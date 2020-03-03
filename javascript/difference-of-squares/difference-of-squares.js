'use strict';

export class Squares {
  constructor(value) {
    this.value = value;
    this.numbers = [...Array(this.value + 1).keys()]
  }

  get sumOfSquares() {
    return this.numbers.reduce((sum, number) => {
      return sum += number ** 2
    }, 0);
  }

  get squareOfSum() {
    return this.numbers.reduce((sum, number) => {
      return sum += number
    }, 0) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
