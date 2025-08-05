import { useState, useEffect } from 'react';
import './App.css';

const ToyShell = new URL('assets/DigitalPetShell.webp', import.meta.url);
const Heart = {
  FULL: new URL('assets/Heart/00_heart_animated_1.png', import.meta.url),
  MORE: new URL('assets/Heart/01_heart_animated_1.png', import.meta.url),
  HALF: new URL('assets/Heart/02_heart_animated_1.png', import.meta.url),
  LESS: new URL('assets/Heart/03_heart_animated_1.png', import.meta.url),
  EMPTY: new URL('assets/Heart/04_heart_animated_1.png', import.meta.url),
};

type Size = "Tiny"|"Small"|"Medium"|"Large"|"Huge"|"Gargantuan";
type Type = any;

enum PetAction {
  NONE,
  EAT,
  PLAY,
  SLEEP,
};

enum PetState {
  IDLE = "Idle",
  DEATH = "Death",
  SLEEP = "Sleep",
  WAKE = "Wake",
  WALK = "Walk",
  TURN = "Turn",
  JUMP = "Jump",
};

interface MonsterImages {
  Idle: URL;
  Death: URL;
  Sleep: URL;
  Wake: URL;
  Walk: URL;
  Turn: URL;
  Jump: URL;
}

interface MonsterDetail {
  index: string;
  name: string;
  size: Size;
  type: Type;
  alignment: string;
  armor_class: any[];
  images: MonsterImages;
}

interface MonsterSummary {
  index: string;
  name: string;
  url: string;
}

interface MonstersList {
  count: number;
  results: MonsterSummary[];
}

const monstersBaseUri = 'https://www.dnd5eapi.co/api/2014/monsters/';

const handleFetchErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error('Error retrieving data: ' + response.statusText);
  }
};

const getMonsters = async () => {
  const response = await fetch(monstersBaseUri);
  handleFetchErrors(response);
  return await response.json() as MonstersList;
};

const getMonsterDetail = async (monsterName: string) => {
  const response = await fetch(`${monstersBaseUri}${monsterName}`);
  handleFetchErrors(response);
  return await response.json() as MonsterDetail;
};

const loadMonsterArt = (): MonsterImages => ({
  Idle: new URL('assets/Idle.webp', import.meta.url),
  Death: new URL('assets/Death.webp', import.meta.url),
  Sleep: new URL('assets/Hide.webp', import.meta.url),
  Wake: new URL('assets/Reveal.webp', import.meta.url),
  Walk: new URL('assets/Walk.webp', import.meta.url),
  Turn: new URL('assets/Turn.webp', import.meta.url),
  Jump: new URL('assets/Jump.webp', import.meta.url),
});


interface Pet
{
  name: String; 
  happiness: number; 
  hunger: number;
  energy: number; 
  species: String; 
  action: PetAction;
  images: MonsterImages;
  state: PetState;
}

const saveKey = "pet"

export function App()  {
  let [pet, setPet] = useState<Pet>({
    name: "",
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: "",
    action: PetAction.NONE,
    images: loadMonsterArt(),
    state: PetState.IDLE, 
  }); 
  const [fact, setFact] = useState("");

  useEffect(() => {
    getMonsterDetail("mimic")
      .then((monster: MonsterDetail) => {
        console.log(monster);
        setPet({
          ...pet,
          species: monster.name,
        });
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPet(pet => ({
        ...pet,
        happiness: Math.max(pet.happiness - 5, 0),
      }));
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(pet.happiness);
  }, [pet]);

  function feedPet() {
    // TODO: consider multiple food types if time permits
    const myFoodFill = 10;
    setPet({
      ...pet,
      hunger: Math.max(pet.hunger - myFoodFill, 0),
    });
    pet.hunger -= myFoodFill;
  }

  function playWithPet() {
    const myHappinessIncrease = 5;
    const energyDecrease = 5;
    setPet({
      ...pet,
      happiness: Math.min(pet.happiness + myHappinessIncrease, 100),
      energy: Math.max(pet.energy - energyDecrease, 0),
      state: PetState.JUMP,
    });
    fetchPetFact(); 
  }

  function restPet() {
    const hungerDecrease = 5;
    const energyIncrease = 5;
    setPet({
      ...pet,
      hunger: Math.max(pet.hunger - hungerDecrease, 0),
      energy: Math.min(pet.energy += energyIncrease, 100),
      state: PetState.SLEEP,
    });
  }

  function hungrierPet() {
    const hungerIncrease = 5;
    setPet({
      ...pet,
      hunger: Math.min(pet.hunger += hungerIncrease, 100),
        state: PetState.WALK,
    });
  }

  function fetchPetFact() {
    // TODO: Put actual fetch here
    const petFact = JSON.parse(
      '{"fact":"Mimics have a shape-changing ability and can polymorph into any object."}'
    );
    setFact(petFact.fact); 
  }

  function getHeartIcon() {
    if (pet.happiness >= 90) return Heart.FULL;
    if (pet.happiness >= 75) return Heart.MORE;
    if (pet.happiness >= 50) return Heart.HALF;
    if (pet.happiness >= 10) return Heart.LESS;
    return Heart.EMPTY;
  }

  function savePetData() {
    localStorage.setItem(saveKey, JSON.stringify(pet));
  }

  function loadPetData() {
    pet = JSON.parse(localStorage.getItem(saveKey) || "");
  }

  return (
    <>
      <div className="pet-shell">
        <img src={ToyShell} />
        <div className="pet-hud">
          <p id="pet-species">MIMIC</p>
          <img id="happiness-meter" src={getHeartIcon()} />
          <div id="hunger-meter" />
          <div id="energy-meter" />
        </div>
        <div className="pet-sprite">
          <img src={pet.images[pet.state]} />
        </div>
      </div>
      <h1>Digital Pet Game</h1>
      <h2>Pet Name: {pet.name}</h2>
      <p id="pet-species">Species: {pet.species}</p>
      <p id="happiness-meter">Happiness: {pet.happiness}</p>
      <p id="hunger-meter">Hunger: {pet.hunger}</p>
      <p id="energy-meter">Energy: {pet.energy}</p>
      <p id="pet-fact">Pet Fact: {fact}</p>
      <button id="save-game" onClick={savePetData}>
        Save
      </button>
      <button id="load-game" onClick={loadPetData}>
        Load
      </button>
      <button id="feed-pet" onClick={feedPet}>
        Feed Pet (5 decrease to hunger)
      </button>
      <button id="play-with-pet" onClick={playWithPet}>
        Play with Pet (5 increase to happiness, 5 decrease to energy)
      </button>
      <button id="reset-pet" onClick={restPet}>
        Tell pet to take a nap (5 increase to energy, 5 decrease to hunger)
      </button>
      <button id="increase-hunger" onClick={hungrierPet}>
        TEST [INCREASE HUNGER 5]
      </button>
    </>
  );
}

