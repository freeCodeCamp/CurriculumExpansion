let userChoice = "rock";
let computerChoice;
let result;

const randomNumber = Math.floor(Math.random() * 3) + 1;

// assign computer choice

switch (randomNumber) {
  case 1:
    computerChoice = "rock";
    break;
  case 2:
    computerChoice = "scissors";
    break;
  case 3:
    computerChoice = "paper";
    break;
}

// calculate result

if (computerChoice === userChoice) {
  result = "draw";
}

if (computerChoice === "rock" && userChoice === "paper") {
  result = "you win!";
}

if (computerChoice === "rock" && userChoice === "scissors") {
  result = "you lose!";
}

if (computerChoice === "paper" && userChoice === "rock") {
  result = "you lose!";
}

if (computerChoice === "paper" && userChoice === "scissors") {
  result = "you win!";
}

if (computerChoice === "scissors" && userChoice === "rock") {
  result = "you win!";
}

if (computerChoice === "scissors" && userChoice === "paper") {
  result = "you lose!";
}

// display result
console.log(`You chose ${userChoice}, computer chose ${computerChoice}, ${result}`);