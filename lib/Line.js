function Line() {
}

function Line (fields) {
  this.fields = fields;
}

Line.prototype.isWon = function () {
  if (this.fields[0] === null) return false;
  return ((this.fields[0].value === this.fields[1].value) && (this.fields[0].value === this.fields[2].value)) ? true : false;
};

module.exports = Line;
