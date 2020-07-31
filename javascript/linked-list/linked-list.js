class Node {
  constructor(prev, value, next) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}


export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add element end of list (new tail)
  push(value) {

    const newNode = new Node(this.tail, value, null);

    if (this.tail) {
      this.tail.next = newNode;
    }
    else {
      this.head = newNode;
    }

    this.tail = newNode;

    console.log('push head:', this.head);
    console.log('push tail:', this.tail);

  }

  // remove last element (the tail)
  pop() {

    if (!this.tail) return null;

    // value of the tail, will be returned
    let value = this.tail.value;

    // new tail is prior tails prev node
    this.tail = this.tail.prev;

    // will have a tail node unless only one node - prev and next will both = null
    if (this.tail) {
      this.tail.next = null;
    }
    else {
      this.head = null;
    }

    return value;
  }

  // remove first element
  shift() {
    // const shifted = this.linkedList.shift();
    // if (this.linkedList.length > 0) this.linkedList[0].prev = null;
    // return shifted.value
  }
  // add element to start of list (new head)
  unshift(value) {

    const node = new Node(null, value, this.head);

    // if head already exists, the newhead is that nodes prev
    if (this.head) {
      this.head.prev = node;
    }
    else {
      this.tail = node;
    }

    this.head = node;
  }

  delete(value) {

    // // get element to be deleted
    // const isValue = (element) => element.value == value;
    // const deleteElement = this.linkedList.findIndex(isValue);
    // if (deleteElement < 0) return this.linkedList;

    // this.prev = this.linkedList[deleteElement].prev;
    // this.next = this.linkedList[deleteElement].next;

    // switch (deleteElement) {
    //   // first element to be deleted
    //   case 0:
    //     this.setElementToNull(0);
    //     // make sure more than one element in list
    //     if (this.linkedList.length > 1) this.linkedList[1].prev = null;
    //     break;

    //   // last element to be deleted
    //   case this.linkedList.length - 1:
    //     this.linkedList[this.linkedList.length - 2].next = null;
    //     this.setElementToNull(deleteElement);
    //     break;

    //   // element somewhere in middle to be deleted
    //   default:
    //     this.linkedList[deleteElement - 1].next = this.next;
    //     this.linkedList[deleteElement + 1].prev = this.prev;
    //     this.setElementToNull(deleteElement);
    //     break;
    // }

    // // remove element from list
    // this.linkedList.splice(deleteElement, 1);

    // return this.linkedList;
  }

  // setElementToNull(element) {
  // this.linkedList[element].prev,
  //   this.linkedList[element].next,
  // this.linkedList[element].value = null;
  // }

  count() {
    // // only count element not logically deleted (value != null)
    // const sum = (count, item) => {
    //   if (item.value) {
    //     count += 1;
    //   }
    //   return count;
    // }
    // const result = this.linkedList.reduce(sum, 0);
    // return result;
  }
}
