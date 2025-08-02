let lastTime = 0;
let delta = 1;
let lastMoveTime = 0; 
let playerScore = 0;
let computerScore = 0;
const fps = 25;
const playerOneScoreElement = document.querySelector("#player-score");
const playerTwoScoreElement = document.querySelector("#computer-score");
const playerOne = document.querySelector(".player_1");
const canvas = document.getElementById("board");
const startGameButton = document.getElementById("start-game");
const resetGameButton = document.getElementById("reset"); 
const ctx = canvas.getContext("2d");

// Paddle Variables
const paddleWidth = 10;
const paddleHeight = 100;

let paddle1Y = canvas?.height / 2 - paddleHeight / 2;

let paddle2Y = canvas?.height / 2 - paddleHeight / 2;

// Ball Variables
const ballSize = 10;

let ballX = canvas?.width / 2;

let ballY = canvas?.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
let showingWinScreen = false; 

function startGame() {
  const gameRules = document.querySelector(".game-rules");
  const game = document.querySelector("#game");
  gameRules?.classList.add("hidden");
  game?.classList.remove("hidden");
  
  playerOneScoreElement.textContent = "Player:" + playerScore;
  
  playerTwoScoreElement.textContent = "Computer:" + computerScore;
  gameLoop(); 
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  
  playerOneScoreElement.textContent = "Player:" + playerScore;
  
  playerTwoScoreElement.textContent = "Computer:" + computerScore;
}

function handleMouseClick(evt) {
  if (showingWinScreen) {
    playerScore = 0;
    computerScore = 0;
    showingWinScreen = false;
  }
}

// Draw Functions
/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} color
 */
function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {string} color
 */
function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
}

function drawSeparator() {
  ctx.beginPath();
  ctx.setLineDash([5, 15]);
  
  ctx.moveTo(canvas?.width / 2, 0);
  
  ctx.lineTo(canvas?.height, canvas?.width / 2);
  ctx.strokeStyle = "#8dff41";

  ctx.stroke();
}

function draw() {
  // Clear Canvas
  drawRect(0, 0, canvas?.width, canvas?.height, "#005430");

  drawSeparator();

  // Draw Paddles
  drawRect(0, paddle1Y, paddleWidth, paddleHeight, "#00df86");
  drawRect(
    canvas?.width - paddleWidth,
    paddle2Y,
    paddleWidth,
    paddleHeight,
    "#00df86",
  );

  // Draw Ball
  drawCircle(ballX, ballY, ballSize, "#92e84c");
}

function increasePlayerScore() {
  playerScore++;
  playerOneScoreElement.textContent = "Player: " + playerScore.toString();
}

function increaseComputerScore() {
  computerScore++;
  playerTwoScoreElement.textContent = "Computer: " + computerScore.toString();
}

// Update Function
function update() {
  // Move Ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball Collision with Top and Bottom Walls
  if (ballY - ballSize < 0 || ballY + ballSize > canvas?.height) {
    ballSpeedY = -ballSpeedY;
  }

  // Ball Collision with Paddles
  if (
    (ballX - ballSize < paddleWidth &&
      ballY > paddle1Y &&
      ballY < paddle1Y + paddleHeight) ||
    (ballX + ballSize > canvas?.width - paddleWidth &&
      ballY > paddle2Y &&
      ballY < paddle2Y + paddleHeight)
  ) {
    ballSpeedX = -ballSpeedX;
  }

  const paddle2Center = (paddleHeight / 2) + paddle2Y;
  if (paddle2Center < ballY - 35 && lastMoveTime > 10) {
    paddle2Y += 60;
    lastMoveTime = 0; 
  }
  else if (paddle2Center > ballY + 35 && lastMoveTime > 10 ) {
    paddle2Y -= 60;
    lastMoveTime = 0; 
  }

  // Ball Out of Bounds
  if (ballX - ballSize < 0) {
    increaseComputerScore();
    resetBall();
  }
  else if (ballX + ballSize > canvas?.width) {
    increasePlayerScore();
    resetBall();
  }
  lastMoveTime++; 
}

// Reset Ball Position
function resetBall() {
  ballX = canvas?.width / 2;
  ballY = canvas?.height / 2;
  ballSpeedX = -ballSpeedX;
}

document.addEventListener("keydown", (ev) => {
  if ((ev.key === "W" || ev.key === "ArrowUp") && paddle1Y - paddleHeight > 0) {
    paddle1Y -= 60;
  } else if ((ev.key === "S" || ev.key === "ArrowDown") && paddle1Y + paddleHeight < canvas?.height) {
    paddle1Y += 60;
  }
});

function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}


canvas.addEventListener('mousemove',
  function (evt) {
    var mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - (paddleHeight / 2);
    paddle1Y = Math.min(Math.max(0, paddle1Y), canvas?.height - paddleHeight); 
  });

canvas.addEventListener('mousedown', handleMouseClick);




// Game Loop
/**
 * @param {number | undefined} [currentTime]
 */
function gameLoop(currentTime) {
  if (lastTime !== undefined && currentTime !== undefined) {
    delta = Math.round(currentTime - lastTime);
    lastTime = currentTime;
  }
  draw();
  update();
  requestAnimationFrame(gameLoop);
}


startGameButton?.addEventListener("click", startGame); 
resetGameButton?.addEventListener("click", resetGame);

