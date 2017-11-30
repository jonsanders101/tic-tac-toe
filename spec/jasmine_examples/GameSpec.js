describe("Game", function () {
  var Game = require('../../lib/Game');

  describe('#new', function () {
    it('initializes with a new board', function () {
        var mockBoard = {};
        var game = new Game(mockBoard);
        expect(game.board).toEqual(mockBoard);
    });
  });

  describe("#play", function () {
    var mockBoard = { play: () => {}};
    var game = new Game(mockBoard);
    var mockField = {};
    it("returns an updated board and a game status", function () {
      spyOn(mockBoard, "play");
      game.play(mockField, mockBoard);
      expect(mockBoard.play).toHaveBeenCalledWith(mockField);
    });
  });
});
