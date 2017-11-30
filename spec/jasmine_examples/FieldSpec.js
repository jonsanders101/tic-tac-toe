describe("Field", function () {
  var Field = require('../../lib/Field');

  describe('#new', function () {
    var field = new Field(0);

    it('should instantiate with given position reference', function () {
      expect(field.position).toEqual(0);
    });
    it('should instantiate with null value', function () {
      expect(field.value).toEqual(null);
    });
  });
});
