'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;
const init = function () {
  currentScore = 0;
  activePlayer = 0; //it shows which player is currently playing game
  score = [0, 0]; //it shows the total score of each player
  playing = true;
  //Starting Conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); //it hides the dice
  player0El.classList.remove('player--winner'); // it removes the black screen from the winner
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active'); // it adds the light white screen to the active player
  player1El.classList.remove('player--active');
};
init();

//This function is made at end. Start from btnRoll code
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //it adds the same image match with the random number

    //3. check for rolled 1
    if (dice !== 1) {
      //IF the number on dice is not 1
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to 2nd player if the dice rolled is 1
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add the current score to the main score
    score[activePlayer] += currentScore;
    //score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2. Check for the winner if score >=100
    if (score[activePlayer] >= 100) {
      playing = false; //it makes false so that the button won't work when the player wins the game
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); //this reset the game.
//there is no need to add bracket to the init function because javascript automatically calls the function
