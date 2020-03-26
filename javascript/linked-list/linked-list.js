export class LinkedList {
  constructor() {
    this.linkedList = [];
  }

  // add element end of list
  push(value) {

    // if there is an existing item: 
    // set prev value of new item to the last existing item
    // set next for the last existing item to new element 
    let prev = null;

    if (this.linkedList.length > 0) {
      const prevItem = this.linkedList.length - 1;
      prev = prevItem;
      this.linkedList[prevItem].next = this.linkedList.length;
    }

    this.linkedList.push({
      prev: prev,
      next: null,
      value: value
    });

    return this.linkedList;
  }

  // remove last element
  pop() {
    if (this.linkedList.length > 0) this.linkedList[this.linkedList.length - 1].next = null;
    return this.linkedList.pop().value;
  }

  // remove first element
  shift() {
    const shifted = this.linkedList.shift();
    if (this.linkedList.length > 0) this.linkedList[0].prev = null;
    return shifted.value
  }
  // add element to start of list
  unshift(value) {
    this.linkedList.unshift({
      prev: null,
      next: 1,
      value: value
    });

    if (this.linkedList.length > 1) this.linkedList[1].prev = 0;

    return this.linkedList;
  }

  delete(value) {

    // get element to be deleted
    const isValue = (element) => element.value == value;
    const deleteElement = this.linkedList.findIndex(isValue);
    if (deleteElement < 0) return this.linkedList;

    this.prev = this.linkedList[deleteElement].prev;
    this.next = this.linkedList[deleteElement].next;

    switch (deleteElement) {
      // first element to be deleted
      case 0:
        this.setElementToNull(0);
        // make sure more than one element in list
        if (this.linkedList.length > 1) this.linkedList[1].prev = null;
        break;

      // last element to be deleted
      case this.linkedList.length - 1:
        this.linkedList[this.linkedList.length - 2].next = null;
        this.setElementToNull(deleteElement);
        break;

      // element somewhere in middle to be deleted
      default:
        this.linkedList[deleteElement - 1].next = this.next;
        this.linkedList[deleteElement + 1].prev = this.prev;
        this.setElementToNull(deleteElement);
        break;
    }

    // remove element from list
    this.linkedList.splice(deleteElement, 1);

    return this.linkedList;
  }

  setElementToNull(element) {
    this.linkedList[element].prev,
    this.linkedList[element].next,
    this.linkedList[element].value = null;
  }

  count() {
    // only count element not logically deleted (value != null)
    const sum = (count, item) => {
      if (item.value) {
        count += 1;
      }
      return count;
    }
    const result = this.linkedList.reduce(sum, 0);
    return result;
  }
}
