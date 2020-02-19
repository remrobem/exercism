export class ComplexNumber {
  constructor(realNum, imaginaryNum) {
    this.realNum = this.a = realNum;
    this.imaginaryNum = this.b = imaginaryNum;
  }

  get real() {
    return this.realNum
  }

  set real(realNum) {
    return this._realNum = realNum;
  }

  get imag() {
    return this.imaginaryNum
  }

  set imag(imaginaryNum) {
    return this._imaginaryNum = imaginaryNum;
  }

  // Sum: (a + i * b) + (c + i * d) = (a + c) + (b + d) * i
  add({ realNum: c, imaginaryNum: d } = complexNumber) {
    return new ComplexNumber((this.a + c), (this.b + d));
  }

  // Subtraction: (a - c) + (b - d) * i
  sub({ realNum: c, imaginaryNum: d } = complexNumber) {
    return new ComplexNumber((this.a - c), (this.b - d));
  }

  // Division: (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i.
  div({ realNum: c, imaginaryNum: d } = complexNumber) {
    return new ComplexNumber((this.a * c + this.b * d) / (c ** 2 + d ** 2), (this.b * c - this.a * d) / (c ** 2 + d ** 2));
  }

  // Multiplication:  (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i.
  mul({ realNum: c, imaginaryNum: d } = complexNumber) {
    return new ComplexNumber((this.a * c) - (this.b * d), (this.b * c) + (this.a * d))
  }

  // The absolute value of a complex number z = a + b * i is a real number |z| = sqrt(a^2 + b^2). 
  // The square of the absolute value |z|^2 is the result of multiplication of z by its complex conjugate.
  get abs() {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }

  // The conjugate of the number a + b * i is the number a - b * i.
  get conj() {
    return new ComplexNumber(this.a, this.b = this.b == 0 ? this.b : this.b * -1);
  }

  // Raising e to a complex exponent can be expressed as e^(a + i * b) = e^a * e^(i * b), 
  // the last term of which is given by Euler's formula e^(i * b) = cos(b) + i * sin(b).
  // e^(a + i * b) = e^a * e^(i * b) => e^(a + i * b) = e^a * ( cos(b) + i * sin(b) )
  get exp() {
    const exponent = Math.exp(this.realNum)
    return new ComplexNumber(exponent * Math.cos(this.imaginaryNum), exponent * Math.sin(this.imaginaryNum))
  }
}
