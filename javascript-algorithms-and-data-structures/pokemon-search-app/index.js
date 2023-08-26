const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const defaultSprite = document.getElementById("default-sprite");
const types = document.getElementById("types");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();

    // Set Pokémon info
    pokemonName.innerHTML = `${data.name.toUpperCase()}`;
    pokemonID.innerHTML = `#${data.id}`;
    weight.innerHTML = `Weight: ${data.weight}`;
    height.innerHTML = `Height: ${data.height}`;
    defaultSprite.src = data.sprites.front_default;

    // Set stats
    hp.innerHTML = data.stats[0].base_stat;
    attack.innerHTML = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    specialAttack.innerHTML = data.stats[3].base_stat;
    specialDefense.innerHTML = data.stats[4].base_stat;
    speed.innerHTML = data.stats[5].base_stat;

    // Set types
    let typesHTML = "";

    data.types.forEach((obj) => {
      typesHTML += `<span class="type ${obj.type.name}">${obj.type.name}</span>`;
    });
    types.innerHTML = typesHTML;
  } catch (err) {
    resetDisplay();
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon();
});

function resetDisplay() {
  // reset to default display if pokemon is not found

  // set image to gray
  defaultSprite.src = "images/search.png";

  // reset stats
  pokemonName.innerHTML = "";
  pokemonID.innerHTML = "";
  types.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  specialAttack.innerHTML = "";
  specialDefense.innerHTML = "";
  speed.innerHTML = "";
}
