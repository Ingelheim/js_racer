$(document).ready(function () {
	// if { page is /game
		var playerOne = new Player(playerOneInitials);
		var playerTwo = new Player(playerTwoInitials);
		var game = new Game(playerOne, playerTwo)
	// }

	$(this).on('keyup', function(event) {
		if (event.keyCode == 80) {
			playerOne.movePlayer();
			game.render();
			playerOne.won(game);
		};
		if (event.keyCode == 81) {
			playerTwo.movePlayer();
			game.render();
			playerTwo.won(game);
		};
		if (playerOne.won() || playerTwo.won() ) {
			$(this).unbind('keyup');
			if (playerOne.won()) { game.winner = playerOne.initials; };
			if (playerTwo.won()) { game.winner = playerTwo.initials; };
			game.finish();
		};
	})

 });

//     var player1Place = 1;
//     var player2Place = 1;
//     var playerOneInitials = $("#player1").data("initials");
//     var playerTwoInitials = $("#player2").data("initials");
 
//     $(this).on('keyup', (function (event) {
//         if (event.which == 80) {
//             updatePlayerPosition('player1', player1Place++);
//             findWinner(playerOneInitials, player1Place);
//         } else if (event.which == 81) {
//             updatePlayerPosition('player2', player2Place++);
//             findWinner(playerTwoInitials, player2Place);
//         }
//     }));
// });
 
// function updatePlayerPosition(player, position) {
//     $('#' + player).find('td').removeClass('active');
//     $('#' + player).find('td:nth-child(' + position + ')').addClass('active');
// }
 
// function findWinner(player, position) {
//     if (position >= 18) {
//         alert(player + ' won!');
//         $.post("/results",{winner: player}, function(result) {
//           $('html').append(result);
//           $(document).unbind('keyup');
//         });
//     }
