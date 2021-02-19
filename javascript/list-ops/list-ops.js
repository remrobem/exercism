
export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(lists) {
    let newList = [...this.values]
    lists.values.forEach((list) => {
      list.values.forEach((value) => {
        newList.push(value);
      });
    });
    return new List(newList);
  }

  filter(func) {
   return new List(this.values.filter(func));
  }

  map(func) {
   return new List(this.values.map(func));
  }

  length() {
    return this.values.length;
  }

  foldl(func, accum) {
   return this.values.reduce(func, accum);
  }

  foldr(func, accum) {
    return this.values.reverse().reduce(func, accum);
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
