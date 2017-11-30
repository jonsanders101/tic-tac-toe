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
  for (lineCount = 0; lineCount < 8; lineCount++) {
    lines.push(new line());
  }
  return lines;
};

 module.exports = Board;
