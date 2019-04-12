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


/*
Now you have a JSON string ready to send over the web! Typically, you won't type out your own JSON data, but instead you'll be working with it.

Normally, you would send a request to retrieve the JSON data you want to work with (this concept is covered in the AJAX section). JSON data transferred over the web is in the stringified format.

There's one more step you may need to do to work with stringified JSON data in your code - you need to parse it with the `JSON.parse()` method. This method takes the JSON string as an argument and recreates the JavaScript value or object that's described by the string. Note that this step may be done for you, depending on the way you requested the data - make sure to read the documentation!

For simplicity, we'll pretend we received our strigified data (stored in `myString`) over the web.

Parse `myString` and store it in a new variable called `myData` (declare your variable with the `const` keyword).
*/
