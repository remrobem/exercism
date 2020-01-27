//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(size) {

    let spiral = [...Array(size)].map(entry => [...Array(size)]);

    let row = 0;
    let column = 0;
    let direction = 'right';

    for (let count = 1; count <= (size * size); count++) {

      spiral[row][column] = count;

      if (direction === 'right') {
        column++;
      }
      if (direction === 'left') {
        column--;
      }
      if (direction === 'up') {
        row--;
      } 
      if (direction === 'down') {
        row++;
      }

      if (row > size - 1 || column > size - 1 || row < 0 || column < 0 || typeof spiral[row][column] != 'undefined') {

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
            column++;
            break;
          case 'up':
            direction = 'right';
            row++;
            column++;
            break;
          default:
            break;
        }
      }
    }

  return spiral;

  }
}
