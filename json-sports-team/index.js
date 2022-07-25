const teamName = document.getElementById("team");
const sport = document.getElementById("sport");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const matches = document.getElementById("matches");
const playerCards = document.getElementById("player-cards");
const selectElement = document.getElementById("players");

/**
 * I don't know if we want them to build out this JSON data or just supply it to them in the first step.
 * If we supply them with the myTeam JSON then we can have the first few steps be about reviewing how to access property values.
 * Ex. console.log(myTeam.Sport);
 * We could have them review dot and bracket notation.
 * This will also be good review for nested objects.
 * Ex. console.log(myTeam["Head Coach"].Name);
 */

const myTeam = {
  Team: "Argentina",
  Sport: "Football",
  Year: 1986,
  "Is World Cup Winner": true,
  "Head Coach": {
    Name: "Carlos Bilardo",
    Matches: 7,
  },
  Players: [
    {
      Name: "Sergio Almirón",
      Position: "FW",
      Number: 1,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Sergio Batista",
      Position: "MF",
      Number: 2,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Ricardo Bochini",
      Position: "MF",
      Number: 3,
      isCaptain: false,
      Nickname: "El Bocha",
    },
    {
      Name: "Claudio Borghi",
      Position: "MF",
      Number: 4,
      isCaptain: false,
      Nickname: "Bichi",
    },
    {
      Name: "José Luis Brown",
      Position: "DF",
      Number: 5,
      isCaptain: false,
      Nickname: "Tata",
    },
    {
      Name: "Daniel Passarella",
      Position: "DF",
      Number: 6,
      isCaptain: false,
      Nickname: "El Gran Capitán",
    },
    {
      Name: "Jorge Burruchaga",
      Position: "FW",
      Number: 7,
      isCaptain: false,
      Nickname: "Burru",
    },
    {
      Name: "Néstor Clausen",
      Position: "DF",
      Number: 8,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "José Luis Cuciuffo",
      Position: "DF",
      Number: 9,
      isCaptain: false,
      Nickname: "El Cuchu",
    },
    {
      Name: "Diego Maradona",
      Position: "MF",
      Number: 10,
      isCaptain: true,
      Nickname: "El Pibe de Oro",
    },
    {
      Name: "Jorge Valdano",
      Position: "FW",
      Number: 11,
      isCaptain: false,
      Nickname: "The Philosopher of Football",
    },
    {
      Name: "Héctor Enrique",
      Position: "MF",
      Number: 12,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Oscar Garré",
      Position: "DF",
      Number: 13,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Ricardo Giusti",
      Position: "MF",
      Number: 14,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Luis Islas",
      Position: "GK",
      Number: 15,
      isCaptain: false,
      Nickname: "El loco",
    },
    {
      Name: "Julio Olarticoechea",
      Position: "DF",
      Number: 16,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Pedro Pasculli",
      Position: "FW",
      Number: 17,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Nery Pumpido",
      Position: "GK",
      Number: 18,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Oscar Ruggeri",
      Position: "DF",
      Number: 19,
      isCaptain: false,
      Nickname: "El Cabezón",
    },
    {
      Name: "Carlos Tapia",
      Position: "MF",
      Number: 20,
      isCaptain: false,
      Nickname: null,
    },
    {
      Name: "Marcelo Trobbiani",
      Position: "MF",
      Number: 21,
      isCaptain: false,
      Nickname: "Calesita",
    },
    {
      Name: "Héctor Zelada",
      Position: "GK",
      Number: 22,
      isCaptain: false,
      Nickname: null,
    },
  ],
};

// this could be a good review of destructuring
const { Sport, Team, Year, Players } = myTeam;
const { Name } = myTeam["Head Coach"];

sport.innerHTML = Sport;
teamName.innerHTML = Team;
year.innerHTML = Year;
headCoach.innerHTML = Name;

const setPlayerCards = (arr) => {
  playerCards.innerHTML += arr
    .map(
      ({ Name, Position, Number, isCaptain, Nickname }) =>
        `
        <div class="player-card">
          <h2>${Name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${Position}</p>
          <p>Number: ${Number}</p>
          <p>Nickname: ${Nickname !== null ? Nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

setPlayerCards(Players);

selectElement.addEventListener("change", (e) => {
  // maybe we could have users print the results of the values for the select options
  //console.log(e.target.value);
  let newArr;
  playerCards.innerHTML = "";

  //this might be the first time a switch statement is used
  switch (e.target.value) {
    case "nickname":
      newArr = Players.filter((player) => player.Nickname !== null);
      setPlayerCards(newArr);
      break;
    case "fw":
      newArr = Players.filter((player) => player.Position === "FW");
      setPlayerCards(newArr);
      break;
    case "mf":
      newArr = Players.filter((player) => player.Position === "MF");
      setPlayerCards(newArr);
      break;
    case "df":
      newArr = Players.filter((player) => player.Position === "DF");
      setPlayerCards(newArr);
      break;
    case "gk":
      newArr = Players.filter((player) => player.Position === "GK");
      setPlayerCards(newArr);
      break;
    default:
      setPlayerCards(Players);
  }
});

/**
 * I think it would be nice to have users console.log the original JSON data
 * Then we can have them console.log the JSON.stringify result
 * Then we can have them console.log the JSON.parse result
 * This will help users compare the outputs and understand how these methods work.
 *
 *
 *  console.log(myTeam);
 *  const stringifiedJSON = JSON.stringify(myTeam);
 *  console.log(stringifiedJSON);
 *  console.log(JSON.parse(stringifiedJSON));
 *
 */
