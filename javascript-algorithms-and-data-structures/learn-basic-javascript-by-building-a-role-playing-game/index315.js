let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: "You are in the town square. You see a sign that says \"Store.\""
	},
	{
		name: "store",
		"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store."
	}
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {	
	button1.innerText = "Go to store";
	button2.innerText = "Go to cave";
	button3.innerText = "Fight dragon";
	button1.onclick = goStore;
	button2.onclick = goCave;
	button3.onclick = fightDragon;
	text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

/* Instead of assigning the `innerText` and `onClick` properties to specific strings and functions like it does now, the `update` function will use data from the `location` that is passed into it. First, data needs to be passed into the `update` function. Inside the `goTown` function, call the `update` function. Here is how you would call a function named `exampleFunction`: `exampleFunction();`
*/

function goTown() {
}

function goStore() {
}

function goCave() {
	console.log("Going to cave.");
}

function fightDragon() {
	console.log("Fighting dragon.");
}

function buyHealth() {
}

function buyWeapon() {
}
