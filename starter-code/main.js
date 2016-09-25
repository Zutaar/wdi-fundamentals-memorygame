var cardOne="queen";
var cardTwo="queen";
var cardThree="king";
var cardFour="king";
/*
if (cardOne===cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
if (cardThree===cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
if (cardOne===cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/
var gameBoard = document.getElementById("game-board");

var createCards = function() {
	var card = document.createElement('div');
	card.className="card";
	gameBoard.appendChild(card);

}
for (var i=0;i<10;i++) {
	createCards();
}
