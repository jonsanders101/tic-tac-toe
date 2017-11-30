describe("Board", function () {
  var Board = require('../../lib/Board');

    function MockField (position) {
      this.position = position;
    }

    function MockLine (fields) {
      this.fields = fields;
    }

    function fieldPositions (fields) {
      var fieldPositions = [];
      for (fieldCount = 0; fieldCount < fields.length; fieldCount++) {
        fieldPositions.push(fields[fieldCount].position);
      }
      return fieldPositions;
    }

    var testFields = [0,1,2,3,4,5,6,7,8];
    var board = new Board(MockField, MockLine);

  describe("#new", function () {
    it('should create 9 fields with position references', function () {
      expect(fieldPositions(board.fields)).toEqual(testFields);
    });
    it('creates line 0 with fields 0, 3, 6', function () {
      expect(board.lines[0].fields).toEqual([0, 3, 6]);
    });
    it('creates line 1 with fields 1, 4, 7', function () {
      expect(board.lines[1].fields).toEqual([1, 4, 7]);
    });
    it('creates line 2 with fields 2, 5, 8', function () {
      expect(board.lines[2].fields).toEqual([2, 5, 8]);
    });
    it('creates line 3 with fields 0, 1, 2', function () {
      expect(board.lines[3].fields).toEqual([0, 1, 2]);
    });
    it('creates line 4 with fields 3, 4, 5', function () {
      expect(board.lines[4].fields).toEqual([3, 4, 5]);
    });
    it('creates line 5 with fields 6, 7, 8', function () {
      expect(board.lines[5].fields).toEqual([6, 7, 8]);
    });
    it('creates line 6 with fields 0, 5, 8', function () {
      expect(board.lines[6].fields).toEqual([0, 4, 8]);
    });
    it('creates line 7 with fields 0, 1, 2', function () {
      expect(board.lines[7].fields).toEqual([2, 4, 6]);
    });
  });
  describe('#play', function () {
    it("calls #playField", function () {
      var mockField = {playField: () => {}};
      board.fields = [mockField];
      spyOn(mockField, "playField");
      board.play(0, "X");
      expect(mockField.playField).toHaveBeenCalled();
    });
    it("returns 'draw' if all fields have been played", function () {
      var mockField = {playField: () => {}, value: "X"};
      board.fields = [mockField];
      expect(board.play(0, "X")).toEqual([board, "draw"]);
    });
  });
});
