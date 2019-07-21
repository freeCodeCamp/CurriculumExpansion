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

	status.innerText = 'You rolled " + total + ".";

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
	element.style.backgroundColor = "lightskyblue;
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

/* 
This program allows players to roll two dice and then graphs the results. However, it is not working correctly.

Debugging is the process of finding exactly what isn't working and fixing it. Bugs usually come in three forms: 1) syntax errors that prevent a program from running, 2) runtime errors when code fails to execute or has unexpected behavior, and 3) semantic (or logical) errors when code doesn't do what it's meant to.

Most code editors help identify syntax errors. A common syntax error is a missing parentheses, curly brace, or quotation mark. Another common error is mixing single and double quotes.

This code editor has identified three syntax errors with red squiggly lines. Find them and fix them.
*/