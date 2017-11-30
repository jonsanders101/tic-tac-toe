function Game () {

}

Game.prototype.play = function (field, board) {
  return board.play(field);
};

module.exports = Game;
