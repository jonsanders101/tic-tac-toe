describe("Line", function () {
  var Line = require('../../lib/Line');

  describe('#new', function () {
    var line = new Line(["field", "field", "field"]);

    it('should instantiate with three fields', function () {
      expect(line.fields).toEqual(["field", "field", "field"]);
    });
  });

  describe('#isWon', function () {
    it('should return true if each field has the same non-null value', function () {
      var field0 = {value: "X"};
      var field1 = {value: "X"};
      var field2 = {value: "X"};
      var line = new Line([field0, field1, field2]);
      expect(line.isWon()).toEqual(true);
    });
  });
});
