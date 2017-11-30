describe("Board", function () {
  var Board = require('../../lib/Board');

  describe("#new", function () {
    it('should create 9 fields with position references', function () {

      function mockField (position) {
        this.position = position;
      }

      function fieldPositions (fields) {
        var fieldPositions = [];
        for (fieldCount = 0; fieldCount < fields.length; fieldCount++) {
          fieldPositions.push(fields[fieldCount].position);
        }
        return fieldPositions;
      }

      var testFields = [0,1,2,3,4,5,6,7,8];

      var board = new Board(mockField);
      expect(fieldPositions(board.fields)).toEqual(testFields);
    });
  });
});
