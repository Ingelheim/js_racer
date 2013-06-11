function PlayerProto() {
  this.movePlayer = function() {
    this.currentPosition++;
  }
  this.won = function(game) {
    if (this.currentPosition >= 19) {
      return true;
    };
    return false;
  };
};

function Player(initialz) {
  this.initials = initialz;
  this.currentPosition = 1;
};


Player.prototype = new PlayerProto();


