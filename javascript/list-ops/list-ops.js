//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    // console.log({values})
    this.values = values;
    // throw new Error('Remove this statement and implement this function');
  }

  append(list) {
    // console.log([...this.values, ...list])
    return new List([...this.values, ...list.values]);
    // throw new Error('Remove this statement and implement this function');
  }

  concat(lists) {
    let newList = [...this.values];
    lists.values.forEach((list) => {
      list.values.forEach((value) => {
        newList.push(value);
      });
    });
    return new List(newList);
  }

  filter(func) {
   return new List(this.values.filter(func))
  }

  map(func) {
   return new List(this.values.map(func))
  }

  length() {
    return this.values.length
  }

  foldl() {
    throw new Error('Remove this statement and implement this function');
  }

  foldr() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
