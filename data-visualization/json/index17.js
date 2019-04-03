const myTeam = {
  "Team": "Argentina",
  "Sport": "Football",
  "Year": 1986,
  "Is World Cup Winner": true,
  "Head Coach": {
    "Name": "Carlos Bilardo",
    "Matches": 7
  },
  "Players": [
    {
      "Name": "Sergio Almirón",
      "Position": "FW",
      "Number": 1,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Sergio Batista",
      "Position": "MF",
      "Number": 2,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Ricardo Bochini",
      "Position": "MF",
      "Number": 3,
      "isCaptain": false,
      "Nickname": "El Bocha"
    },
    {
      "Name": "Claudio Borghi",
      "Position": "MF",
      "Number": 4,
      "isCaptain": false,
      "Nickname": "Bichi"
    },
    {
      "Name": "José Luis Brown",
      "Position": "DF",
      "Number": 5,
      "isCaptain": false,
      "Nickname": "Tata"
    },
    {
      "Name": "Daniel Passarella",
      "Position": "DF",
      "Number": 6,
      "isCaptain": false,
      "Nickname": "El Gran Capitán"
    },
    {
      "Name": "Jorge Burruchaga",
      "Position": "FW",
      "Number": 7,
      "isCaptain": false,
      "Nickname": "Burru"
    },
    {
      "Name": "Néstor Clausen",
      "Position": "DF",
      "Number": 8,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "José Luis Cuciuffo",
      "Position": "DF",
      "Number": 9,
      "isCaptain": false,
      "Nickname": "El Cuchu"
    },
    {
      "Name": "Diego Maradona",
      "Position": "MF",
      "Number": 10,
      "isCaptain": true,
      "Nickname": "El Pibe de Oro"
    },
    {
      "Name": "Jorge Valdano",
      "Position": "FW",
      "Number": 11,
      "isCaptain": false,
      "Nickname": "The Philosopher of Football"
    },
    {
      "Name": "Héctor Enrique",
      "Position": "MF",
      "Number": 12,
      "isCaptain": false,
      "Nickname": "El Negro"
    },
    {
      "Name": "Oscar Garré",
      "Position": "DF",
      "Number": 13,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Ricardo Giusti",
      "Position": "MF",
      "Number": 14,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Luis Islas",
      "Position": "GK",
      "Number": 15,
      "isCaptain": false,
      "Nickname": "El loco"
    },
    {
      "Name": "Julio Olarticoechea",
      "Position": "DF",
      "Number": 16,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Pedro Pasculli",
      "Position": "FW",
      "Number": 17,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Nery Pumpido",
      "Position": "GK",
      "Number": 18,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Oscar Ruggeri",
      "Position": "DF",
      "Number": 19,
      "isCaptain": false,
      "Nickname": "El Cabezón"
    },
    {
      "Name": "Carlos Tapia",
      "Position": "MF",
      "Number": 20,
      "isCaptain": false,
      "Nickname": null
    },
    {
      "Name": "Marcelo Trobbiani",
      "Position": "MF",
      "Number": 21,
      "isCaptain": false,
      "Nickname": "Calesita"
    },
    {
      "Name": "Héctor Zelada",
      "Position": "GK",
      "Number": 22,
      "isCaptain": false,
      "Nickname": null
    }
  ]
};

const myString = JSON.stringify(myTeam);
const myData = JSON.parse(myString);

// console.log(myData["Team"])  // -> Argentina
// console.log(myData["Is World Cup Winner"])  // -> true
// console.log(myData["Head Coach"]["Name"])  // -> Carlos Bilardo


/*
There's an array stored in the key `Players` to hold all the members of the Argentinian squad. A common task that you'll see when you're working with JSON structures is to loop over an array and do something with each item.

JavaScript has several ways you can loop over the items in an array, but for testing purposes, use the `forEach()` method to solve this challenge.

First, save the array to a variable named `players` using the `const` keyword to declare your variable. Next, loop over the array and print each player's name to the console.

For reference, the syntax of the `.forEach()` method is:

```
arr.forEach((item) => {
  // do something with item;
});
```

Note that each time through the loop, the `item` is an object that holds a player's information.
*/
