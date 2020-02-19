export class Triplet {

  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3
  }

  sum() {
    return this.side1 + this.side2 + this.side3;
  }

  product() {
    return this.side1 * this.side2 * this.side3;
  }

  isPythagorean() {
    return Math.pow(this.side1,2) + Math.pow(this.side2,2) === Math.pow(this.side3,2);
  }

  static where({ minFactor = 1, maxFactor = 1, sum }) {
    let results = [];
    // by definition, a < b < c, so start loops to meet this rule
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          // valid triplet
          if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
            // check sum if requested
            if (sum) {
              // set values for calling sum method
              this.prototype.side1 = a;
              this.prototype.side2 = b;
              this.prototype.side3 = c;
              if (this.prototype.sum() == sum) {
                results.push(new Triplet(a, b, c));
              }
            } else {
              results.push(new Triplet(a, b, c));
            }
          }
        }
      }
    }
    return results;
  }
}