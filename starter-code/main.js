var cards = ["queen","queen","king","king"];

var cardsInPlay = [];
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
	return card;
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('card-type'));
	
	if (this.getAttribute('card-type')==='queen') {
		this.innerHTML='<img src="queen.jpg" width=150 height=200 />';
	}
	if (this.getAttribute('card-type')==="king") {
		this.innerHTML='<img src="king.jpg" width=150 height=200 />';
	}
	if (cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay=[];
	}
}

var isMatch = function(pair) {
	if (pair[0]===pair[1]) {
		console.log("You win!");
	}
	else {
		console.log("You lose!");
	}
}

for (var i=0;i<cards.length;i++) {
	var c = createCards();
	c.setAttribute('card-type', cards[i]);
	c.addEventListener('click', isTwoCards);
}
