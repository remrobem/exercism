'use strict';

const allergyValues = [
  'eggs',           // 1
  'peanuts',        // 2
  'shellfish',      // 4 
  'strawberries',   // 8
  'tomatoes',       // 16
  'chocolate',      // 32
  'pollen',         // 64
  'cats'            // 128
];

export class Allergies {
  constructor(score) {
    this.score = score;
    // score converted to binary and reversed so it aligns with allergyValues
    // 132 (cats and shellfish) = 10000100 reverse = [0,0,1,0,0,0,0,1]
    this.scoreBinary = (this.score).toString(2).split('').reverse();
  }

  list() {
    let list = [];
    this.scoreBinary.map( (value, index) => {
      if (value == '1' && index < allergyValues.length) {
        list.push(allergyValues[index]);
      }
    });
    return list;
  }

  allergicTo(food) {
    // find index of the food and use index to determine if that food is included in the allergy
    const index = allergyValues.findIndex(allergyValue =>  allergyValue == food);
    return this.scoreBinary[index] == '1' ? true : false;
  }
}
