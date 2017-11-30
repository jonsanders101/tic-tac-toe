describe("Board", function () {
  var Board = require('../../lib/Board');

    function mockField (position) {
      this.position = position;
    }

    function mockLine () {
    }

    function fieldPositions (fields) {
      var fieldPositions = [];
      for (fieldCount = 0; fieldCount < fields.length; fieldCount++) {
        fieldPositions.push(fields[fieldCount].position);
      }
      return fieldPositions;
    }

    var testFields = [0,1,2,3,4,5,6,7,8];

    var board = new Board(mockField, mockLine);

  describe("#new", function () {
    it('should create 9 fields with position references', function () {

      expect(fieldPositions(board.fields)).toEqual(testFields);
    });
    it('creates 8 lines', function () {
      expect(board.lines.length).toEqual(8);
    });
  });
});
