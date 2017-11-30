function Game () {

}

Game.prototype.play = function (field, board) {
  return [board, 'pending'];
};

module.exports = Game;
