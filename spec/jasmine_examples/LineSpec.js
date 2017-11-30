describe("Line", function () {
  var Line = require('../../lib/Line');
  var line, fields;

  function setFields (fieldValues) {
    fields = [{value: fieldValues[0]}, {value: fieldValues[1]}, {value: fieldValues[2]}];
    line = new Line(fields);
  }

  describe('#new', function () {
    it('should instantiate with three fields', function () {
      setFields(["X", "X", "X"]);
      expect(line.fields).toEqual(fields);
    });
  });

  describe('#isWon', function () {
    it('should return true if each field has the same non-null value', function () {
      setFields(["X", "X", "X"]);
      expect(line.isWon()).toEqual(true);
    });
    it('should return false if values of fields do not match', function () {
      setFields(["O", "X", "X"]);
      expect(line.isWon()).toEqual(false);
    });
  });
});
