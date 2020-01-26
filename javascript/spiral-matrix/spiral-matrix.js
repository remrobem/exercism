//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(size) {

    console.log(size)

    let array = [...Array(size)].map(entry => [...Array(size)]);

    let row = 0;
    let column = 0;
    let direction = 'right';

    for (let count = 1; count <= (size * size); count++) {

      array[row][column] = count;

      console.log(array)

      if (direction === 'right') {
        column++;
      }
      if (direction === 'left') {
        column--;
      }
      if (direction === 'up') {
        row--;
      } if (direction === 'down') {
        row++;
      }

      console.log(array)
      console.log(`A row: ${row} ${column}`)

      if ( typeof array[row][column] != 'undefined' || row > size - 1 || column > size - 1 || row < 0 || column < 0) {

        console.log(`before switch ${direction} ${row} ${column} ${size} ${array[row][column]}`)

        switch (direction) {
          case 'right':
            direction = 'down';
            row++;
            column--;
            break;
          case 'down':
            direction = 'left';
            row--;
            column--;
            break;
          case 'left':
            direction = 'up';
            row--;
            column--;
            break;
          case 'up':
            direction = 'right';
            row--;
            column++;
            break;
          default:
            break;
        }
        console.log(`after switch ${direction} ${row} ${column}`)

      }

      console.log(`B row: ${row} ${column}`)
      if (array[row][column] === 'undefined') {
        array[row][column] = count;
      }
    }


    console.log(array)

    // throw new Error("Remove this statement and implement this function");
  }
}
