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

Board.prototype._createLines = function (line) {
  var lines = [];
  lines.push(new line([0, 3, 6]));
  lines.push(new line([1, 4, 7]));
  lines.push(new line([2, 5, 8]));
  lines.push(new line([0, 1, 2]));
  lines.push(new line([3, 4, 5]));
  lines.push(new line([6, 7, 8]));
  lines.push(new line([0, 4, 8]));
  lines.push(new line([2, 4, 6]));
  return lines;
};

 module.exports = Board;
