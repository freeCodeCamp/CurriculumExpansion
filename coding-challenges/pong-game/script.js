let playerScore = 0; 
let computerScore = 0; 
const playerOneScoreElement = document.querySelector("#player-score");
const playerTwoScoreElement = document.querySelector("#computer-score");

function startGame() {
  const gameRules = document.querySelector(".game-rules");
  const game = document.querySelector("#game"); 
  gameRules?.classList.add("hidden");
  game?.classList.remove("hidden"); 
  // @ts-ignore
  playerOneScoreElement.textContent = "Player:" + playerScore;
  // @ts-ignore
  playerTwoScoreElement.textContent = "Computer:" + computerScore;
}
