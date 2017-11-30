describe("Game", function () {
  var Game = require('../../lib/Game');

  describe("#play", function () {
    var game = new Game();
    var mockField = {};
    var mockBoard = { play: () => {}};
    it("returns an updated board and a game status", function () {
      spyOn(mockBoard, "play");
      game.play(mockField, mockBoard);
      expect(mockBoard.play).toHaveBeenCalledWith(mockField);
    });
  });
});
