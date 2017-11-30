function Field() {
}

function Field (position) {
  this.position = position;
  this.value = null;
}

Field.prototype.playField = function (player) {
  this.value = player;
};

module.exports = Field;
