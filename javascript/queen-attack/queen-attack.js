export class QueenAttack {
    constructor({ white, black } = { white: [0, 3], black: [7, 3] }) {
        this.white = white;
        this.black = black;
        [this.whiteRow, this.whiteCol, this.blackRow, this.blackCol] = [...this.white, ...this.black];
        /* white and black cannot occupy same cell */
        if (this.whiteRow == this.blackRow && this.whiteCol == this.blackCol) {
            throw new Error("Queens cannot share the same space");
        }
    }

    toString() {
        let board = ['_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _'];

        board = this.setCellColor(board, this.white, 'W');
        board = this.setCellColor(board, this.black, 'B');
        /* assumes board is square */
        /* newline required in last cell */
        board[board.length -1 ,board.length -1] += '\n';
        return board.join('\n');

    }

    setCellColor(board, cell, value) {
        let row = board[cell[0]].split(' ');
        row[cell[1]] = value;
        row = row.join(' ');
        board[cell[0]] = row;
        return board;
    }

    canAttack() {
        /* diagonal check - an equal absolute diff between row and col means attack is allowed */
        if (Math.abs(this.whiteRow - this.blackRow) === Math.abs(this.whiteCol - this.blackCol)) {
            return true;
        }
        /* same row or column allows attack */
        if (this.whiteRow == this.blackRow || this.whiteCol == this.blackCol) {
            return true;
        }

        return false;
    }
}
