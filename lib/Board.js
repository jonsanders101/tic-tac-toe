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
  return lines;
};

 module.exports = Board;
