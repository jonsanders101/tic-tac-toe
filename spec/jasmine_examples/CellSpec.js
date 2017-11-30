describe("Cell", function () {
  var Cell = require('../../lib/Cell');

  describe('#new', function () {
    var cell = new Cell(0);

    it('should instantiate with given position reference', function () {
      expect(cell.position).toEqual(0);
    });
    it('should instantiate with null value', function () {
      expect(cell.value).toEqual(null);
    });
  });
});
