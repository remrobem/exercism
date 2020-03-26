//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//  `push` (insert value at back);
//  `pop` (remove value at back);
//  `shift` (remove value at front).
//  `unshift` (insert value at front);
//  `delete` (delete the first occurence of a specified value)


export class LinkedList {
  constructor() {
    this.value = null;
    this.next = null;
    this.prev = null;
    this.linkedList = [];
  }

  push(value) {
    this.linkedList.push({
      prev: this.prev,
      next: this.next,
      value: value
    });
    return this.linkedList;
  }

  pop() {
    const popped = this.linkedList.pop();
    return popped.value;
  }

  shift() {
    throw new Error("Remove this statement and implement this function");
  }

  unshift() {
    throw new Error("Remove this statement and implement this function");
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    throw new Error("Remove this statement and implement this function");
  }
}
