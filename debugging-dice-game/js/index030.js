const rollButton = document.getElementById( "roll" );
const toggleButton = document.getElementById( "toggle" );
const dice1 = document.getElementById( "dice1" );
const dice2 = document.getElementById( "dice2" );
const status = document.getElementById( "status" );

let numberOfDoubles = 0;
let totalRolls = 0;
let rollCount = new Array(13);
let toggle = false;

rollButton.onclick = rollDice;
toggleButton.onclick = togglePercentNumber;

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

  if (dice1Value === dice2Value) {
    status.innerText += " Doubles!";
    isDoubles = true;
  }

  addTotal(isDoubles, total);
}

function addTotal(total, doubles) {
  console.log(total)
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
`total` should be the total value of the two dice. Why is it `false` when it should be a number? The next bug to watch out for is when a function's arguments are supplied in the incorrect order.

The `addTotal` function takes two arguments: first `total`, then `doubles`. When the function is called in line 37, the argurments are supplied in the incorrect order. Switch them.
*/