describe("Game", function () {
  var Game = require('../../lib/Game');

  describe("#play", function () {
    var game = new Game();
    var mockField = {playField: () => {}};
    var mockBoard = { fields: [mockField] };
    it("returns an updated board and a game status", function () {
      expect(game.play(0, mockBoard)).toEqual([mockBoard, 'pending']);
    });
    it("calls #playField", function () {
      spyOn(mockField, "playField");
      game.play(0, mockBoard);
      expect(mockField.playField).toHaveBeenCalled();
    });
  });
});
