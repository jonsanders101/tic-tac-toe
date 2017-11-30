function Field() {
}

function Field (position) {
  this.position = position;
  this.value = null;
}

Field.prototype.playField = function (player) {
  if (this.value) throw "Field has already been played";
  this.value = player;
};

module.exports = Field;
