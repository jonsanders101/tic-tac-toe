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
    it('initializes with two players', function () {
      expect(game.players).toEqual(["X", "O"]);
    });
  });

  describe("#play", function () {
    beforeEach(function() {
      spyOn(mockBoard, "play");
      game.play(1);
    });
    it("calls #play on the board", function () {
      expect(mockBoard.play).toHaveBeenCalledWith(1, "X");
    });
    it("alternates the players", function () {
      game.play(1);
      expect(mockBoard.play).toHaveBeenCalledWith(1, "O");
    });
  });
});
