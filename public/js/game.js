// (function(window) {

  function GameProto() {
    this.render = function () {
      var p1Position = this.playerOne.currentPosition;
      var p2Position = this.playerTwo.currentPosition;

      $('td').removeClass('active');

      $('#player1').find('td:nth-child(' + p1Position + ')').addClass('active');
      $('#player2').find('td:nth-child(' + p2Position + ')').addClass('active');
    }; 
    this.finish = function() {
      this.raceTime = new Date() - this.startTime;
      $.post('/results', {'winner':this.winner, 'race_time':this.raceTime}, function(result) {
        $('html').append(result);
      });
    };
  };

  function Game(playerOne, playerTwo) {
    this.winner = null;
    this.startTime = new Date();
    this.raceTime = null;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo; 
  }

  Game.prototype = new GameProto();

// window.Game = new Game;

// })(window);
