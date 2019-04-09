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

const players = myData["Players"];
players.forEach((item) => {
  console.log(item["Name"])
});

/*
Congratulations, you've completed the JSON challenges!

Here's a quick recap of what you've learned:
- JavaScript Object Notation (JSON) is a lightweight text format you use to structure data
- JSON is both human-readable and easily parsed by machines
- JSON is popular because it's flexible - you build it with combinations of objects and arrays
- These objects and arrays can hold values of any of the following types: strings (in double quotes), numbers, Boolean values, nested objects, nested arrays, or `null`
- JSON doesn't need to be an object (`{ }`) - any valid data type could be valid JSON on its own
- Some JSON data will have an array as the outer-most structure
- JSON is a data format only - it's used to hold properties, so including methods in an object is NOT valid JSON
- You transfer JSON over the web as a string, so a valid JSON data structure must be "stringified" first
- Depending how you requested JSON data over the web, you may need to parse it before you can work with it in your code
- Depending on the JSON's structure, you access its values with dot and/or bracket notation
*/
