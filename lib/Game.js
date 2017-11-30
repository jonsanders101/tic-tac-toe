function Game (board = new Board(Field, Line)) {
  this.board = board;
  this.players = ["X", "O"];
}

Game.prototype.play = function (field) {
  var result = this.board.play(field, this.players[0]);
  this.players.reverse();
  return result;
};

module.exports = Game;
