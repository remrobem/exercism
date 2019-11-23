//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor( { white = [0,3], black = [7,3] }) {
        this.white = white;
        this.black = black;
        console.log('this.white: ', this.white)
        console.log('this.black: ', this.black)
    }

    toString() {
        let board = ['_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _\n']

      board = this.setColor(board, this.white, 'W');
      board = this.setColor(board, this.black, 'B');
      return board.join('\n');

    }

    canAttack() {
        throw new Error("Remove this statement and implement this function");
    }

    setColor (board, cell, value) {
      let row = board[cell[0]].split(' ');
      row[cell[1]] = value;
      row = row.join(' ');
      board[cell[0]] = row;
      return board;
    }
}
