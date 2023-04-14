const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const endingScreen = document.querySelector(".ending-title");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;
let activeCheckpointCollisionDetection = true;

class Player {
  constructor() {
    this.position = {
      x: 10,
      y: 400,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 40;
    this.height = 40;
  }
  draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    //this condition stops the player from falling past the canvas screen's height
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      // this condition stops the player from jumping above the screen
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    if (this.position.x < this.width) {
      this.position.x = this.width;
    }
  }
}

class Platform {
  constructor(x, y) {
    this.position = {
      x,
      y,
    };
    this.width = 200;
    this.height = 40;
  }
  draw() {
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class CheckPoint {
  constructor(x, y) {
    this.position = {
      x,
      y,
    };
    this.width = 40;
    this.height = 70;
  }
  draw() {
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
const platformPositions = [
  { x: 500, y: 450 },
  { x: 700, y: 400 },
  { x: 850, y: 350 },
  { x: 900, y: 350 },
  { x: 1050, y: 150 },
  { x: 2500, y: 450 },
  { x: 2900, y: 400 },
  { x: 3150, y: 350 },
  { x: 3900, y: 450 },
  { x: 4200, y: 400 },
  { x: 4400, y: 200 },
  { x: 4700, y: 150 },
];

const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);

const checkpointPositions = [
  { x: 1170, y: 80 },
  { x: 2900, y: 330 },
  { x: 4800, y: 80 },
];
const checkpoints = checkpointPositions.map(
  (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y)
);

const animate = () => {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  platforms.forEach((platform) => {
    platform.draw();
  });

  checkpoints.forEach((checkpoint) => {
    checkpoint.draw();
  });

  player.update();

  if (keys.rightKey.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.rightKey.pressed) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x -= 5;
      });
    } else if (keys.leftKey.pressed) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x += 5;
      });
    }
  }

  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >=
        platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <=
        platform.position.x + platform.width - player.width / 3,
    ];

    if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0;
    }
  });

  checkpoints.forEach((checkpoint, index) => {
    if (
      player.position.x >= checkpoint.position.x &&
      activeCheckpointCollisionDetection
    ) {
      if (index === checkpoints.length - 1) {
        showEndingTitleScreen();
        activeCheckpointCollisionDetection = false;
        movePlayer("ArrowRight", 0, false);
      }
    }
  });
};

const keys = {
  rightKey: {
    pressed: false,
  },
  leftKey: {
    pressed: false,
  },
};

const movePlayer = (key, xVelocity, isPressed) => {
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;

    case "ArrowUp":
    // older browsers might use spacebar instead of an empty string
    case " " || "Spacebar":
      player.velocity.y -= 8;
      break;

    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  }
};

const startGame = () => {
  // show the game and hide instructions screen
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
};

const showEndingTitleScreen = () => {
  endingScreen.style.display = "block";
};

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});
