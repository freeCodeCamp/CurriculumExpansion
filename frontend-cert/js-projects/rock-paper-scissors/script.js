// Start with the user picking a choice between rock, paper, and scissors
const userChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();

// Generate a random number between 1 and 3
const randomNumber = Math.floor(Math.random() * 3) + 1;
let computerChoice;

// Assign a choice to the computer based on the generated 1, 2, and 3
/*
1 – rcok
2 – paper
3 – scissors
*/

// introduce if/elseif/else
if (randomNumber === 1) {
  computerChoice = 'rock';
} else if (randomNumber === 2) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}

// Determine the winner – we can start with concatenation (+) here then get campers to refactor to template literals
/*
if (userChoice === computerChoice) {
  console.log(`It's a tie! You both chose ${userChoice}.`);
} else if (
  (userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'paper' && computerChoice === 'rock') ||
  (userChoice === 'scissors' && computerChoice === 'paper')
) {
  console.log(`You win! ${userChoice} beats ${computerChoice}.`);
} else if (
  (computerChoice === 'rock' && userChoice === 'scissors') ||
  (computerChoice === 'paper' && userChoice === 'rock') ||
  (computerChoice === 'scissors' && userChoice === 'paper')
) {
  console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
} else {
  console.log('You must choose eiter rock, paper, or scissors! Refresh the page to make a choice again.');
}
*/

// Be more specific with the winner so we can say what cuts, covers, or smashes what. We can also add "Refresh the page to play again" when they win and "Refresh the page to try again." when they lose to each log to increase engagement.
if (userChoice === computerChoice) {
  console.log(
    `It's a tie! You both chose ${userChoice}. Refresh the page to play again.`
  );
} else if (userChoice === 'rock' && computerChoice === 'scissors') {
  console.log(
    'You win! Rock smashes scissors. Refresh the page to play again.'
  );
} else if (userChoice === 'paper' && computerChoice === 'rock') {
  console.log('You win! Paper covers rock. Refresh the page to play again.');
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
  console.log('You win! Scissors cuts paper. Refresh the page to play again.');
} else if (computerChoice === 'rock' && userChoice === 'scissors') {
  console.log(
    'You lose! Rock smashes scissors. Refresh the page to try again.'
  );
} else if (computerChoice === 'paper' && userChoice === 'rock') {
  console.log('You lose! Paper covers rock. Refresh the page to try again.');
} else if (computerChoice === 'scissors' && userChoice === 'paper') {
  console.log('You lose! Scissors cuts paper. Refresh the page to try again.');
} else {
  console.log(
    'You must choose either rock, paper, or scissors! Refresh the page to make another choice.'
  );
}
