const rollButton = document.getElementById( "roll" );
const toggleButton = document.getElementById( "toggle" );
const dice1 = document.getElementById( "dice1" );
const dice2 = document.getElementById( "dice2" );
const status = document.getElementById( "status" );

let numberOfDoubles = 0;
let totalRolls = 0;
let rollCount = new Array(13);
let toggle = false;

rollButton.onclick = rollDice();
toggleButton.onclick = togglePercentNumber();

for (let i = 0; i < 13; i++) {
  rollCount[i] = 0;
}

function rollDice () {
  totalRolls++;
  const dice1Value = Math.floor( Math.random() * 6 ) + 1;
  const dice2Value = Math.floor( Math.random() * 6 ) + 1;
  const total = dice1Value + dice2Value;

  dice1.innerText = dice1Value;
  dice2.innerText = dice2Value;

  status.innerText = "You rolled " + total + ".";

  let isDoubles = false;

  if (dice1Value = dice2Value) {
    status.innerText += " Doubles!";
    isDoubles = true;
  }

  addTotal(isDoubles, total);
}

function addTotal(total, doubles) {
  rollCount[total] = total;
  const element = document.getElementById(total);
  element.style.backgroundColor = "lightskyblue";
  element.style.width = `${rollCount[total] * 10}px`;
  updatecount();
  
  if (doubles) {
    numberOfDoubles++;
    document.getElementById("doubles").innerText = numberOfDoubles;
  }
}

function togglePercentNumber() {
  toggle = !toggle;
  updateCount();
}

function updateCount() {
  for (let i = 0; i <= 13; i++) {
    const element = document.getElementById(i);
    const percent = (rollCount[i] / totalRolls * 100) + "%";
    element.innerText = toggle ? percent : rollCount[i];
  }
}

/* 
The browser's JavaScript console is invaluable in debugging runtime and semantic errors. The messages in the console often tell you right where the error is. If you run this code, the console says "Uncaught TypeError: Assignment to constant variable." and even shows the error is on line 32.

Line 32 is in the `rollDice` function. That function should only be called if the player clicks the 'rollDice' button. So before you fix the error on line 32, you need to figure out why line 32 is even being run.

In lines 12 and 13, functions are assigned to `onclick` events for the two buttons on the page. When parentheses are on the end of a function name, the function is called immediately. Since we just want to assign the function to the `onclick` events, remove the parentheses on the end of each function name.
*/
