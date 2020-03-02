//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(bt, parent = null) {
    this.bt = bt;
    this.parent = parent;
  }

  static fromTree(bt) {
    return new Zipper(bt);
  }

  toTree() {
    // console.log('toTree ', JSON.stringify(this));
    return this.parent
      ? this.parent.toTree()
      : this.bt;
  }

  value() {
    return this.bt.value;
  }

  left() {
    return this.bt.left
      ? new Zipper(this.bt.left, this)
      : null;
  }

  right() {
    return this.bt.right
      ? new Zipper(this.bt.right, this)
      : null;
  }

  up() {
    // console.log('up: ', this)
    return this.parent;
  }

  setValue(value) {
    this.bt.value = value;
    return new Zipper(this.bt, this.parent)
  }

  setLeft(node) {
    console.log('1. setLeft: ', this.bt);
    console.log('node: ', node)
    this.bt.left = node;
    console.log('2. setLeft: ', this.bt);
    return new Zipper(this.bt, this.parent)
  }

  setRight(node) {
    this.bt.right = node;
    return new Zipper(this.bt, this.parent)

  }
}
