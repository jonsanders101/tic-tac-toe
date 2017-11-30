function Board (field = Field) {
  this.fields = this._createFields(field);
}

Board.prototype._createFields = function (field) {
  var fields = [];
  for (fieldCount = 0; fieldCount < 9; fieldCount++) {
    fields.push(new field(fieldCount));
  }
  return fields;
};
 module.exports = Board;
