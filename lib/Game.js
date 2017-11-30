function Game (board = new Board(Field, Line)) {
  this.board = board;
  this.players = ["X", "O"];
}

Game.prototype.play = function (field) {
  return this.board.play(field);
};

module.exports = Game;
