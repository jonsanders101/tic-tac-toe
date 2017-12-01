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
      board.fields = [ { position: 0, value: "O", playField: () => {} },
                       { position: 1, value: "X" },
                       { position: 2, value: "O" },
                       { position: 3, value: "X" },
                       { position: 4, value: "O" },
                       { position: 5, value: "X" },
                       { position: 6, value: "O" },
                       { position: 7, value: "X" },
                       { position: 8, value: "O" } ];
      board.lines = [  { fields: [ 0, 3, 6 ], isWon: () => {return false} },
                      { fields: [ 1, 4, 7 ], isWon: () => {return false}  },
                      { fields: [ 2, 5, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 1, 2 ], isWon: () => {return false}  },
                      { fields: [ 3, 4, 5 ], isWon: () => {return false}  },
                      { fields: [ 6, 7, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 4, 8 ], isWon: () => {return false}  },
                      { fields: [ 2, 4, 6 ], isWon: () => {return false}  } ];
      spyOn(board.fields[0], "playField");
      board.play(0, "X");
      expect(board.fields[0].playField).toHaveBeenCalled();
    });
    it("returns 'draw' if all fields have been played", function () {
      board.fields = [ { position: 0, value: "O", playField: () => {} },
                       { position: 1, value: "X" },
                       { position: 2, value: "O" },
                       { position: 3, value: "X" },
                       { position: 4, value: "O" },
                       { position: 5, value: "X" },
                       { position: 6, value: "O" },
                       { position: 7, value: "X" },
                       { position: 8, value: "O" } ];
      board.lines = [  { fields: [ 0, 3, 6 ], isWon: () => {return false} },
                      { fields: [ 1, 4, 7 ], isWon: () => {return false}  },
                      { fields: [ 2, 5, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 1, 2 ], isWon: () => {return false}  },
                      { fields: [ 3, 4, 5 ], isWon: () => {return false}  },
                      { fields: [ 6, 7, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 4, 8 ], isWon: () => {return false}  },
                      { fields: [ 2, 4, 6 ], isWon: () => {return false}  } ];

      expect(board.play(0, "X")).toEqual([board, "draw"]);
    });
    it("returns 'pending' if game is still in play", function () {
      board.fields = [ { position: 0, value: null, playField: () => {} },
                       { position: 1, value: "X" },
                       { position: 2, value: null },
                       { position: 3, value: null },
                       { position: 4, value: null },
                       { position: 5, value: null },
                       { position: 6, value: null },
                       { position: 7, value: null },
                       { position: 8, value: null } ];
      board.lines = [  { fields: [ 0, 3, 6 ], isWon: () => {return false} },
                      { fields: [ 1, 4, 7 ], isWon: () => {return false}  },
                      { fields: [ 2, 5, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 1, 2 ], isWon: () => {return false}  },
                      { fields: [ 3, 4, 5 ], isWon: () => {return false}  },
                      { fields: [ 6, 7, 8 ], isWon: () => {return false}  },
                      { fields: [ 0, 4, 8 ], isWon: () => {return false}  },
                      { fields: [ 2, 4, 6 ], isWon: () => {return false}  } ];

      expect(board.play(0, "X")).toEqual([board, "pending"]);
    });
    it("returns 'won' if game is won", function () {
      board.fields = [ { position: 0, value: null, playField: () => {} },
                       { position: 1, value: "X" },
                       { position: 2, value: "X" },
                       { position: 3, value: null },
                       { position: 4, value: null },
                       { position: 5, value: null },
                       { position: 6, value: null },
                       { position: 7, value: null },
                       { position: 8, value: null } ];
      board.lines = [  { fields: [ 0, 3, 6 ],  isWon: () => {return false} },
                      {  fields: [ 1, 4, 7 ],  isWon: () => {return false}  },
                      {  fields: [ 2, 5, 8 ],  isWon: () => {return false}  },
                      {  fields: [ 0, 1, 2 ],  isWon: () => {return true}  },
                      {  fields: [ 3, 4, 5 ],  isWon: () => {return false}  },
                      {  fields: [ 6, 7, 8 ],  isWon: () => {return false}  },
                      {  fields: [ 0, 4, 8 ],  isWon: () => {return false}  },
                      {  fields: [ 2, 4, 6 ],  isWon: () => {return false}  } ];
      expect(board.play(0, "X")).toEqual([board, "won"]);
    });
  });
});
