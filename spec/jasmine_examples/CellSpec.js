describe("Cell", function () {
  var Cell = require('../../lib/Cell');

  describe('#new', function () {
    it('should instantiate with given position value', function () {
      var cell = new Cell(0);
      expect(cell.position).toEqual(0);
    });
  });
});
