window.onload = function() {

/* write your code here */
// Create an object for all the dom elements
const $els = {
  game: document.querySelector('#game'),
  winner: document.querySelector('#winner'),
  container: document.querySelector('.container'),
  racer: document.querySelector('.racer'),
  blue: document.querySelector('#blue'),
  red: document.querySelector('#red'),
  startb: document.querySelector('#start'),
  };

//add keydown event listener to the document, that triggers the
//startRace function
document.addEventListener('keydown', startRace);

// add the counter for the cars movement and store it as a variable
let blueLeft = 0;
let redLeft = 0;


//make the cars move on keydown event of the keys Z(90) and right arrow(39);
function startRace(event) {
if (event.keyCode == 90) {
  blueLeft += 10;
  $els.blue.style.left = blueLeft + 'px';
  if (blueLeft % 200 === 0) {
    $els.blue.style.animation = 'mymove 1s';
  }
  if (blueLeft == 590) {
    document.removeEventListener('keydown', startRace);
    $els.winner.innerHTML ='Turtle wins!!!';
  }
  }
if (event.keyCode == 39) {
  redLeft += 10;
  $els.red.style.left = redLeft + 'px';
  if (redLeft % 100 === 0) {
    $els.red.style.animation = 'mymove 1s';
  }
  if (redLeft == 590) {
    document.removeEventListener('keydown', startRace);
    $els.winner.innerHTML ='Snile wins!!!';
  }
  }
}
//reset the game by clicking on the start button,
//so the cars will return to their initial position
$els.startb.addEventListener('click', resetGame);
function resetGame() {
  location.reload();
}
}





