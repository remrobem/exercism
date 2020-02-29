//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  // constructor(value, left, right) {
  //   this.value = value;
  //   this.left = left;
  //   this.right = right;
  //   // throw new Error("Remove this statement and implement this function");
  // }
  constructor(bt, parent = null) {
    this.bt = bt;
    this.parent = parent ? parent : bt;
  }

  static fromTree(bt) {
    this.bt = bt;
    console.log('fromTree: ', this.bt);
    return new Zipper(bt);
  }

  toTree() {
    // return this.parent;
    return this.parent;
  }

  value() {
    console.log('value: ', this.bt.value);
    return this.bt.value;
  }

  left() {
    console.log(Object.entries(this.bt)[0]);
    // this.bt.left.parent = Object.entries(this.bt)[0];
    console.log('left: ', this.bt);
    console.log('this: ', this)

    return this.bt.left
      ? new Zipper(this.bt.left, this.bt)
      : null;
  }

  right() {
    console.log('right: ', this.bt);
    return this.bt.right
      ? new Zipper(this.bt.right, this.bt)
      : null;
  }

  up() {
    throw new Error("Remove this statement and implement this function");
  }

  setValue() {
    throw new Error("Remove this statement and implement this function");
  }

  setLeft() {
    throw new Error("Remove this statement and implement this function");
  }

  setRight() {
    throw new Error("Remove this statement and implement this function");
  }
}
