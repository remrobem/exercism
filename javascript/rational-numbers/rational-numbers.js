// calculate the Greatest Common Denominator (GCD) between 2 numbers
// recursive call has x = prior value of y and y is the remainder of x/y
// examples:
// 5,9 ==> 9,5 ==> 5,4 ==> 4,1 == 1,0 returns 1
// 3, 12 ==> 12,3 ==> 3,0 returns 3
// 9,9 ==> 9,0 returns 9
const calcGCD = (x, y) => {
  if (y === 0) return x;
  return calcGCD(y, x % y);
};

export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add({ a, b }) {
    const a1 = this.a * b + a * this.b;
    const b1 = a1 == 0 ? 1 : this.b * b;
    return new Rational(a1, b1).reduce();
  }

  sub({ a, b }) {
    const a1 = this.a * b - a * this.b;
    const b1 = a1 == 0 ? 1 : this.b * b;
    return new Rational(a1, b1).reduce();
  }

  mul({ a, b }) {
    return new Rational(this.a * a, this.b * b).reduce();
  }

  div({ a, b }) {
    return new Rational(this.a * b, this.b * a).reduce().switchSign();
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(exponent) {
    return new Rational(this.a ** exponent, this.b ** exponent);
  }

  expreal(exponent) {
    return Math.round((exponent ** this.a) ** (1 / this.b) * 100) / 100;
  }

  reduce() {
    // x and y for gcd need to be in absolute value sequence low to high
    let absA = Math.abs(this.a);
    let absB = Math.abs(this.b);
    const x = absA <= absB ? absA : absB;
    const y = absA >= absB ? absA : absB;

    const gcd = calcGCD(x, y);

    this.a /= gcd;
    this.b /= gcd;
    this.switchSign();
    return this;
  }

  switchSign() {
    if (this.b < 0) {
      this.a *= -1;
      this.b *= -1;
    }
    return this;
  }
}
