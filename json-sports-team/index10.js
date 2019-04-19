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
      "Name": "Sergio Batista",
      "Position": "MF",
      "Number": 2,
      "isCaptain": false,
      "Nickname": null
    }
  ]
}

/*
Now you've seen an example of each valid data type in JSON: strings, numbers, Boolean values, objects, arrays, and `null`.

JSON can look a lot like JavaScript object literal sytax, but there are two differences worth noting here:
1. JSON is a data format only - it's used to hold properties, so including methods in an object is NOT valid JSON
2. JSON doesn't need to be an object (`{ }`) - any of the data types mentioned above could be valid JSON on their own (a single string or number), but some JSON data will have an array as the outer-most structure

Let's add one more player into the `Players` array after Sergio's object for practice. Include a `Name` key with a value of `Diego Maradona` and a `Position` key with a value of `MF`.
*/
