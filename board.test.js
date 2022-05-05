const Board =  require('./board.js');

test('Probando método show', () => {
    const rows = Math.floor(Math.random() * (10 - 1)) + 1;
    const cols = Math.floor(Math.random() * (10 - 1)) + 1;
    const board = new Board(rows, cols);
    expect(typeof board.show()).toBe("string")
    expect(board.show().match(/(0|1)/g).length).toBe(rows * cols)
});