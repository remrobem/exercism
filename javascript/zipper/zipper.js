
export class Zipper {
  constructor(bt, parent = null) {
    this.bt = bt;
    this.parent = parent;
  }

  // deep copy so all sub-objects copied correctly
  static fromTree(bt) {
    return new Zipper(JSON.parse(JSON.stringify(bt)));
  }

  toTree() {
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
    return this.parent;
  }

  setValue(value) {
    this.bt.value = value;
    return new Zipper(this.bt, this.parent)
  }

  setLeft(node) {
    this.bt.left = node;
    return new Zipper(this.bt, this.parent)
  }

  setRight(node) {
    this.bt.right = node;
    return new Zipper(this.bt, this.parent)

  }
}
