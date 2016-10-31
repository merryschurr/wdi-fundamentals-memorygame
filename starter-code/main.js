console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

// cards in play
var cardsInPlay = [];

console.log('borad');

// board set it to a variable
// can add cards 
var board = document.getElementById('game-board');
// create your board
function createBoard() {
  // loop through your cards 
  for (var i=0; i<cards.length; i++) {
    // create a div element which will be used as a card
    var cardElement = document.createElement('div');
    // add a class to the card element which will help link styling
    cardElement.className = 'card';
    // 'data-card' element of the array
    cardElement.setAttribute('data-card', cards[i]);
    // isTwoCards will be executed when clicked
    cardElement.addEventListener('click', isTwoCards);

    console.log('this is board: ', board);
    console.log('this is cardElemtnt: ', cardElement);
    // append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
//checks to see if there are cards in play
function isTwoCards() {
  // add cards to array 
  cardsInPlay.push(this.getAttribute('data-card'));
  // show the card's image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='img/queen_m.png'>";// queen
  } else {
    this.innerHTML = "<img src='img/king_m.png'>"; // king
  }
  // if two cards in play match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as argument
    isMatch(cardsInPlay);
    // clear cards in play array
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();