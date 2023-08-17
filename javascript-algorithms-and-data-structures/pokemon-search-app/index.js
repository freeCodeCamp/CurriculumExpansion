document.getElementById("search-btn").addEventListener("click", getPokemon);

var pokeMonId = document.getElementById("poke_num");
var pokemonNameDisplay = document.getElementById("poke_name");
var pokeTypesDisplay = document.getElementById("poke_types");
var pokemonHeightDisplay = document.getElementById("pokemon-ht");
var pokemonWeightDisplay = document.getElementById("pokemon-wt");
var pokemonHpDisplay = document.getElementById("hp_display");
var pokemonAttackDisplay = document.getElementById("attack_display");
var pokemonDefenseDisplay = document.getElementById("defense_display");
var pokemonSpAttackDisplay = document.getElementById("sp_attack_display");
var pokemonSpDefenseDisplay = document.getElementById("sp_defense_display");
var pokemonSpeedDisplay = document.getElementById("speed_display");

function resetDisplay() {
  pokemonNameDisplay.innerHTML = "";
  pokeMonId.innerHTML = "";
  pokeTypesDisplay.innerHTML = "";
  pokemonHeightDisplay.innerHTML = "";
  pokemonWeightDisplay.innerHTML = "";
  pokemonHpDisplay.innerHTML = "";
  pokemonAttackDisplay.innerHTML = "";
  pokemonDefenseDisplay.innerHTML = "";
  pokemonSpAttackDisplay.innerHTML = "";
  pokemonSpDefenseDisplay.innerHTML = "";
  pokemonSpeedDisplay.innerHTML = "";
}

function getPokemon(e) {
  const name = document.getElementById("search-input").value;

  const pokemonName = name.toLowerCase();

  // const pokeTypes = document.getElementById("types").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // reset display
      resetDisplay();

      //get names
      pokemonNameDisplay.innerHTML += "Name: " + data.name.toUpperCase();

      // get ids
      pokeMonId.innerHTML += "ID: " + data.id;

      //get weight
      pokemonWeightDisplay.innerHTML = "Weight: " + data.weight;

      // get height
      pokemonHeightDisplay.innerHTML = "Height: " + data.height;

      // get image
      // set src attribute of image to the image url
      document.getElementById("pokeImage").src = data.sprites.front_default;

      // get stats
      pokemonHpDisplay.innerHTML = data.stats[0].base_stat;

      pokemonAttackDisplay.innerHTML = data.stats[1].base_stat;

      pokemonDefenseDisplay.innerHTML = data.stats[2].base_stat;

      pokemonSpAttackDisplay.innerHTML = data.stats[3].base_stat;

      pokemonSpDefenseDisplay.innerHTML = data.stats[4].base_stat;

      pokemonSpeedDisplay.innerHTML = data.stats[5].base_stat;

      // get types
      var pokeTypesArr = [];
      for (var i = 0; i < data.types.length; i++) {
        var type = data.types[i].type.name;
        pokeTypesArr.push(type);
        console.log("array" + pokeTypesArr);
      }
      pokeTypesDisplay.innerHTML = pokeTypesArr.join(", ");
    })

    .catch((err) => {
      alert("Pokemon not found");
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
