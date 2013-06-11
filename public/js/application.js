$(document).ready(function () {
 
    var player1Place = 1;
    var player2Place = 1;
    var playerOneInitials = $("#player1").data("initials");
    var playerTwoInitials = $("#player2").data("initials");
 
    $(this).on('keyup', (function (event) {
        if (event.which == 80) {
            updatePlayerPosition('player1', player1Place++);
            findWinner(playerOneInitials, player1Place);
        } else if (event.which == 81) {
            updatePlayerPosition('player2', player2Place++);
            findWinner(playerTwoInitials, player2Place);
        }
    }));
});
 
function updatePlayerPosition(player, position) {
    $('#' + player).find('td').removeClass('active');
    $('#' + player).find('td:nth-child(' + position + ')').addClass('active');
}
 
function findWinner(player, position) {
    if (position >= 18) {
        alert(player + ' won!');
        $.post("/results",{winner: player}, function(result) {
          // alert(result);
          $('html').append(result);
        });
        // location.reload(false);
        // Post to /results/:id
    }
}
