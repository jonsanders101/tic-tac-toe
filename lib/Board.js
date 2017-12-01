function Board (field = Field, line = Line) {
  this.fields = this._createFields(field);
  this.lines = this._createLines(line);
}

Board.prototype._createFields = function (field) {
  var fields = [];
  for (fieldCount = 0; fieldCount < 9; fieldCount++) {
    fields.push(new field(fieldCount));
  }
  return fields;
};

Board.prototype.play = function (field, player) {
  this.fields[field].playField(player);
  var linesToQuery = this._getLines(field)
  for (lineCount = 0; lineCount < linesToQuery.length; lineCount++) {
    if (linesToQuery[lineCount].isWon()) return [this, 'won'];
  }
  if (this._isFull()) return [this, 'draw'];
  return [this, 'pending'];
};

Board.prototype._getLines = function (field) {
  var lines = [];
  this.lines.forEach(function (line) {
    if (line.fields.includes(field)) lines.push(line);
  });
  return lines;
};

Board.prototype._isFull = function () {
  var result = true;
  this.fields.forEach(function (field) {
    if (field.value === null) {
	    result = false;
	    return;
    }
  });
  return result;
};

Board.prototype._createLines = function (line) {
  var lines = [];

  var fieldsInLines = [ [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 4, 8],
                        [2, 4, 6]];

  for (lineCount = 0; lineCount < 8; lineCount++) {
    lines.push(new line(fieldsInLines[lineCount]));
  }

  return lines;
};

 module.exports = Board;
