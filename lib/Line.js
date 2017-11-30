function Line() {
}

function Line (fields) {
  this.fields = fields;
}

Line.prototype.isWon = function () {
  if (this.fields[0].value === null) return false;
  return _fieldsMatch(this.fields);
};

_fieldsMatch = function (fields) {
  return (fields[0].value === fields[1].value) && (fields[0].value === fields[2].value);
};

module.exports = Line;
