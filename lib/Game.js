function Game () {

}

Game.prototype.play = function (field, board) {
  board.fields[field].playField();
  return [board, 'pending'];
};

module.exports = Game;
