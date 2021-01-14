export class List {
  constructor(list) {
    this.list = list;
  }

  compare(comparelist) {

    const EQUAL = 'EQUAL';
    const UNEQUAL = 'UNEQUAL';
    const SUBLIST = 'SUBLIST';
    const SUPERLIST = 'SUPERLIST';

    // convert lists to strings
    const listOne = this.list ? this.list.toString() : '';
    const listTwo = comparelist.list ? comparelist.list.toString() : '';

    //EQUAL
    if (listOne == listTwo) return EQUAL;
    
    // one of the lists is empty
    if (!listOne.length && listTwo.length) return SUBLIST;
    if (listOne.length && !listTwo.length) return SUPERLIST;
    
    // SUBLIST 
    if (listTwo.includes(listOne)) return SUBLIST;
    // SUPERLIST
    if (listOne.includes(listTwo)) return SUPERLIST;
    
    // UNEQUAL if no other matches found
    return UNEQUAL;
  }
}
