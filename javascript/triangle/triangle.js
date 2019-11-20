//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Determine if a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has at least two sides the same length. 
// (It is sometimes specified as having exactly two sides the same length, 
//   but for the purposes of this exercise we'll say at least two.)

// A scalene triangle has all sides of different lengths.

// Note
// For a shape to be a triangle at all, all sides have to be of length > 0, 
// and the sum of the lengths of any two sides must be 
// greater than or equal to the length of the third side. See Triangle Inequality.

export class Triangle {
  constructor(side1 = 0, side2 = 0, side3 = 0) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {

    if (this.side1 <= 0 || this.side2 <= 0|| this.side3 <= 0) {
      throw 'Not a triangle. Each side must be greater than 0.';
    }

    if (this.side1 + this.side2 <= this.side3) {
      throw 'Not a valid triangle. The third side must be greater than or equal to the sum of the first 2 sides'
    }

    
  }
}
