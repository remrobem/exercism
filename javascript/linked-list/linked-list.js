class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add node to end
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //adding first node. head and tail are the new node with null prev and next
      this.head = newNode;
      this.tail = newNode;
    } else {
      //new node becomes tail and current tail now points to new node
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  // remove last element (the tail)
  pop() {
    const removedNode = this.tail;
    if (!this.head.next) {
      //first node removed, head and tail become null
      this.head = null;
      this.tail = null;
    } else {
      //new tail is the removed tails previous node
      this.tail = removedNode.prev;
      this.tail.next = null;
    }
    return removedNode.value;
  }

  // remove first element
  shift() {
    const removedNode = this.head;
    if (!this.head.next) {
      //first node is only node. head and tail become null
      this.head = null;
      this.tail = null;
    } else {
      //the head changed to the removed nodes next and previous null
      this.head = removedNode.next;
      this.head.prev = null;
    }
    return removedNode.value;
  }

  // add element to start of list (new head)
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //adding first node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // new node at start gets the current head next node, old head prev point to new start
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this;
  }

  count() {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  // delete first occurance of a value
  delete(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        //deleting only node
        if (current == this.head && current == this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current == this.head) {
          // deleting first node
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current == this.tail) {
          // deleting tail node
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        current = null; // end while loop after 1st value match found
      } else {
        current = current.next;
      }
    }
    return this;
  }
}
