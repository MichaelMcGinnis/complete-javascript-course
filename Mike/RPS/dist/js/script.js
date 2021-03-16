'use strict';

let computerChoice;

document.querySelector('.play').addEventListener('click', function () {
  computerChoice = Math.trunc(Math.random() * 3 + 1);
  console.log(computerChoice);
  console.log(typeof document.querySelector('.user').value);

  // Computer chooses rock
  if (computerChoice === 1 && document.querySelector('.user').value === '1') {
    document.querySelector('.computer').textContent = 'Rock';
    document.querySelector('.result').textContent = 'You tie!';
  } else if (
    computerChoice === 1 &&
    document.querySelector('.user').value === '2'
  ) {
    document.querySelector('.computer').textContent = 'Rock';
    document.querySelector('.result').textContent = 'You win!';
  } else if (
    computerChoice === 1 &&
    document.querySelector('.user').value === '3'
  ) {
    document.querySelector('.computer').textContent = 'Rock';
    document.querySelector('.result').textContent = 'You lose!';
  }
  // Computer chooses paper
  else if (
    computerChoice === 2 &&
    document.querySelector('.user').value === '1'
  ) {
    document.querySelector('.computer').textContent = 'Paper';
    document.querySelector('.result').textContent = 'You lose!';
  } else if (
    computerChoice === 2 &&
    document.querySelector('.user').value === '2'
  ) {
    document.querySelector('.computer').textContent = 'Paper';
    document.querySelector('.result').textContent = 'You tie!';
  } else if (
    computerChoice === 2 &&
    document.querySelector('.user').value === '3'
  ) {
    document.querySelector('.computer').textContent = 'Paper';
    document.querySelector('.result').textContent = 'You win!';
  }

  // Computer chooses scissors
  else if (
    computerChoice === 3 &&
    document.querySelector('.user').value === '1'
  ) {
    document.querySelector('.computer').textContent = 'Scissors';
    document.querySelector('.result').textContent = 'You win!';
  } else if (
    computerChoice === 3 &&
    document.querySelector('.user').value === '2'
  ) {
    document.querySelector('.computer').textContent = 'Scissors';
    document.querySelector('.result').textContent = 'You lose!';
  } else if (
    computerChoice === 3 &&
    document.querySelector('.user').value === '3'
  ) {
    document.querySelector('.computer').textContent = 'Scissors';
    document.querySelector('.result').textContent = 'You tie!';
  }
});
