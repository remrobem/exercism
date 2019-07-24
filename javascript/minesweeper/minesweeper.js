/* eslint-disable no-console */
// export 
const annotate = (board) => {
    const getCell = (row, column, rowLength) => {
        return (row < 0 || column < 0 || row > board.length - 1 || column > rowLength - 1) ? 0 : board[row].charAt(column);
    };

    const replace = (row, index, char) => {
        row = row.split("");
        row[index] = char;
        return row.join("");
    }
    return board.map((row, rowIndex) => {
        let columnIndex = 0;
        let count = 0;
        while (columnIndex < row.length - 1) {
            if (row[rowIndex].charAt(columnIndex) == ' ') {
                if (getCell(rowIndex, columnIndex - 1, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex, columnIndex + 1, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex - 1, columnIndex - 1, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex - 1, columnIndex, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex - 1, columnIndex + 1, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex + 1, columnIndex - 1, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex + 1, columnIndex, row.length) == '*') {
                    count++;
                }
                if (getCell(rowIndex + 1, columnIndex + 1, row.length) == '*') {
                    count++;
                }
                
                row = replace(row, columnIndex, count);
                count = count == 0 ? ' ' : count;
            }

            columnIndex++;
        }
        return row;
    });
};

const input = [
    '   ',
    ' * ',
    '   ',
];
const expected = [
    '111',
    '1*1',
    '111',
];
console.log(annotate(input));
