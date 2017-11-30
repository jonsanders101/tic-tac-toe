describe("Game", function () {
  var Game = require('../../lib/Game');

  var mockBoard, game;

  beforeEach(function() {
    mockBoard = {play: () => {}};
    game = new Game(mockBoard);
  });

  describe('#new', function () {
    it('initializes with a new board', function () {
      expect(game.board).toEqual(mockBoard);
    });
  });

  describe("#play", function () {
    it("calls #play on the board", function () {
      spyOn(mockBoard, "play");
      game.play(1);
      expect(mockBoard.play).toHaveBeenCalledWith(1);
    });
  });
});
