console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne=='queen' && cardTwo=='queen'){
alert('You found a match!');
}else {
alert('Sorry, try again.');
}

if (cardThree=='king' && cardFour=='king'){
alert('You found a match!');
}else {
alert('Sorry, try again.');
}

if (cardOne=='queen' && cardThree=='king'){
alert('Sorry, try again.');
}else {
alert('You found a match!');
}

if (cardTwo=='queen' && cardFour=='king'){
alert('Sorry, try again.');
}else {
alert('You found a match!');
}

Var createBoard = function(){

	var boardDiv = document.getElementById('game-board');

	var cards = 4;

	for (var i = 0; i < card; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		boardDiv.appendChild(cardDiv);
	}
}


