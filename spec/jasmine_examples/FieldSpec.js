describe("Field", function () {
  var Field = require('../../lib/Field');
  var field = new Field(0);

  describe('#new', function () {

    it('should instantiate with given position reference', function () {
      expect(field.position).toEqual(0);
    });
    it('should instantiate with null value', function () {
      expect(field.value).toEqual(null);
    });
  });
  describe('#playField', function () {
    it('changes value to mark of player', function () {
      field.playField("X");
      expect(field.value).toEqual("X");
    });
  });
});
