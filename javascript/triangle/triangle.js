export class Triangle {
  constructor(side1 = 0, side2 = 0, side3 = 0) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    // validate sides are numbers
    if (typeof this.side1 != 'number' || typeof this.side2 != 'number' || typeof this.side3 != 'number' ) {
      throw 'Values must be numeric.';
    }

    // all sides greater than 0
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw 'Not a triangle. Each side must be greater than 0.';
    }

    // sort sides so longest side can be used for triangle inequality check
    const sortedSizes = [this.side1, this.side2, this.side3].sort((a, b) => a - b);
    if (sortedSizes[0] + sortedSizes[1] < sortedSizes[2]) {
      throw 'Not a valid triangle. The third side must be greater than or equal to the sum of the first 2 sides'
    }

    // equilateral = all sides equal
    if ( this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral'
    }

    // isosceles =  two sides equal
    if ( this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return 'isosceles'
    }

    // scalene = all sides different
    return 'scalene'
  }
}
