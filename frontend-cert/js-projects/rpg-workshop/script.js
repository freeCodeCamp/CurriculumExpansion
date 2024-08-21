// have campers slowly build this out when they need that particular location
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
  },
];

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", goStore);
button2.addEventListener("click", goCave);
button3.addEventListener("click", fightDragon);

const text = document.getElementById("text");
const monsterStats = document.getElementById("monsterStats");

// this ensures that the event listeners are removed before adding new ones
function removeOldEventListeners() {
  button1.removeEventListener("click", goStore);
  button1.removeEventListener("click", buyHealth);
  button1.removeEventListener("click", fightSlime);
  button1.removeEventListener("click", attack);
  button1.removeEventListener("click", goTown);
  button1.removeEventListener("click", restart);

  button2.removeEventListener("click", goCave);
  button2.removeEventListener("click", buyWeapon);
  button2.removeEventListener("click", fightBeast);
  button2.removeEventListener("click", dodge);
  button2.removeEventListener("click", goTown);
  button2.removeEventListener("click", restart);

  button3.removeEventListener("click", fightDragon);
  button3.removeEventListener("click", goTown);
  button3.removeEventListener("click", restart);
}

function update(location) {
  monsterStats.style.display = "none";

  removeOldEventListeners();

  button1.textContent = location["button text"][0];
  button2.textContent = location["button text"][1];
  button3.textContent = location["button text"][2];

  button1.addEventListener("click", location["button functions"][0]);
  button2.addEventListener("click", location["button functions"][1]);
  button3.addEventListener("click", location["button functions"][2]);
  // we need to use innerHTML here so the HTML entities show up on screen properly
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

let health = 100;
let gold = 50;

const healthText = document.getElementById("healthText");
const goldText = document.getElementById("goldText");

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.textContent = gold;
    healthText.textContent = health;
  } else {
    text.textContent = "You do not have enough gold to buy health.";
  }
}

let currentWeapon = 0;
let inventory = ["stick"];

const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 },
];

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.textContent = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.textContent = `You bought a ${newWeapon}.`;
      inventory.push(newWeapon);
      text.textContent += ` In your inventory you have: ${inventory}`;
    } else {
      text.textContent = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.textContent = "You already have the most powerful weapon!";
    button2.textContent = "Sell weapon for 15 gold";
    button2.addEventListener("click", sellWeapon);
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.textContent = gold;
    let currentWeapon = inventory.shift();
    text.textContent = `You sold a ${currentWeapon}. In your inventory you have: ${inventory}`;
  } else {
    text.textContent = "Don't sell your only weapon!";
  }
}

let fightingIndex;

function fightSlime() {
  fightingIndex = 0;
  goFight();
}

function fightBeast() {
  fightingIndex = 1;
  goFight();
}

function fightDragon() {
  fightingIndex = 2;
  goFight();
}

let monsterHealth;

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];

const monsterName = document.getElementById("monsterName");
const monsterHealthText = document.getElementById("monsterHealth");

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fightingIndex].health;
  monsterStats.style.display = "block";
  monsterName.textContent = monsters[fightingIndex].name;
  monsterHealthText.textContent = monsterHealth;
}

let xp = 0;

function attack() {
  const currentWeaponName = weapons[currentWeapon].name;
  const monstersName = monsters[fightingIndex].name;

  text.textContent = `The ${monstersName} attacks. You attack it with your ${currentWeaponName}.`;

  health -= getMonsterAttackValue(monsters[fightingIndex].level);

  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.textContent += " You miss.";
  }

  healthText.textContent = health;
  monsterHealthText.textContent = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fightingIndex === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }

  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.textContent += ` Your ${inventory.pop()} breaks.`;
    currentWeapon--;
  }
}

// Have campers create this function on their own
// Provide the hit formula for them though
function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
}

// Have campers create this function on their own
function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

// Have campers create this function on their own
function dodge() {
  const monstersName = monsters[fightingIndex].name;
  text.textContent = `You dodge the attack from the ${monstersName}`;
}

const xpText = document.getElementById("xpText");

function defeatMonster() {
  gold += Math.floor(monsters[fightingIndex].level * 6.7);
  xp += monsters[fightingIndex].level;
  goldText.textContent = gold;
  xpText.textContent = xp;
  update(locations[4]);
}

// Have campers create these lose and winGame functions on their own
function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.textContent = gold;
  healthText.textContent = health;
  xpText.textContent = xp;
  goTown();
}
