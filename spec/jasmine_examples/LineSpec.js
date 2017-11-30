describe("Line", function () {
  var Line = require('../../lib/Line');

  describe('#new', function () {
    var line = new Line(["field", "field", "field"]);

    it('should instantiate with three fields', function () {
      expect(line.fields).toEqual(["field", "field", "field"]);
    });
  });
});
