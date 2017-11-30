describe("Game", function () {
  var Game = require('../../lib/Game');

  describe("#play", function () {
    var game = new Game();
    var mockBoard = {};
    it("returns an updated board and a game status", function () {
      expect(game.play(0, mockBoard)).toEqual([mockBoard, 'pending']);
    });
  });
});
