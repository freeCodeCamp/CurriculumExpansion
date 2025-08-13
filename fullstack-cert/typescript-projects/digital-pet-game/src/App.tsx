import { useState, useEffect, useRef } from "react";
import "./App.css";
import * as catFacts from "./assets/cat-facts.json";

interface StatBarProps {
  label: string;
  value: number;
  icon: string;
}

function getStatColorClass(value: number): string {
  if (value >= 70) return "high";
  if (value >= 40) return "medium";
  return "low";
}

function StatBar({ label, value, icon }: StatBarProps) {
  const colorClass = getStatColorClass(value);

  return (
    <div className="stat-bar">
      <div className="stat-header">
        <div className="stat-label">
          <span className="stat-icon">{icon}</span>
          <span className="stat-name">{label}</span>
        </div>
        <span className="stat-value">{Math.round(value)}%</span>
      </div>

      <div className="stat-progress">
        <div
          className={`stat-fill ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

enum PetAction {
  NONE,
  EAT,
  PLAY,
  SLEEP,
}

enum MiscAction {
  FACT,
}

enum PetState {
  IDLE = "Idle",
  DEATH = "Death",
  SLEEP = "Sleep",
  WAKE = "Wake",
  WALK = "Walk",
  TURN = "Turn",
  JUMP = "Jump",
  BITE = "Attack_Bite",
}

// TODO: swap with Freecodecamp's api
//const apiUri = "https://www.dnd5eapi.co/api/2014/monsters/";

interface Pet {
  name: string;
  happiness: number;
  hunger: number;
  energy: number;
  species: string;
  action: PetAction;
  state: PetState;
}

type PetMood =
  | "happy"
  | "excited"
  | "content"
  | "sad"
  | "tired"
  | "sick"
  | "hungry";

export function calculatePetMood(pt: Pet): PetMood {
  debugger;
  const { hunger, happiness, energy /*health*/ } = pt;

  //if (health < 30) return 'sick';
  if (hunger < 20) return "hungry";
  if (energy < 20) return "tired";
  if (happiness < 30) return "sad";
  if (happiness > 80 && energy > 70) return "excited";
  if (happiness > 60) return "happy";

  return "content";
}

export function getPetEmoji(mood: PetMood): string {
  const emojiMap: Record<PetMood, string> = {
    happy: "😺", // grinning cat
    excited: "😻", // heart-eyes cat
    content: "😸", // smiling cat
    sad: "😿", // crying cat
    tired: "😽", // kissing cat (closest to sleepy)
    sick: "🙀", // weary cat (looks unwell)
    hungry: "😹", // joy cat (closest to hungry/funny)
  };

  return emojiMap[mood];
}

const saveKey = "pet";

export function App() {
  //TODO: The pet has a lot of functionality tied to it that's currently
  //  just inlined with the rest of the App. Do we want to break it into
  //  a hook? Are learner's already expected to have enough React knowledge
  //  to consider this or should we keep it simple with in-lines?
  let [pet, setPet] = useState<Pet>({
    name: "",
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: "",
    action: PetAction.NONE,
    state: PetState.IDLE,
  });

  let petRef = useRef<Pet>(pet);
  useEffect(() => {
    petRef.current = pet;
  }, [pet]);

  const [fact, setFact] = useState<string | null>("");
  const [gameStarted, setGameStarted] = useState(false);

  //TODO: I think this is almost definitely too complicated. I imagine we'll
  //  revert and have each button assigned to a particular action if I can't
  //  figure out a simpler implementation. We'll be one short of the "fun fact"
  //  functionality, but we can just add a fourth button to the device.

  //TODO: Integrate with the FCC API once it's ready.
  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * catFacts.length) - 1;
    const currentFact = catFacts[randomNumber];
    setFact(currentFact);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPet((pet) => ({
        ...pet,
        happiness: Math.max(pet.happiness - 5, 0),
        hunger: Math.min(pet.hunger + 5, 100),
      }));
    }, 30 * 1000); // TODO : These things use minutes but it's taking too long

    return () => clearInterval(interval);
  }, []);

  function doAction(action: PetAction | MiscAction) {
    switch (action) {
      case PetAction.EAT:
        feedPet();
        break;
      case PetAction.SLEEP:
        restPet();
        break;
      case PetAction.PLAY:
        playWithPet();
        break;
    }
  }

  function feedPet() {
    //TODO: consider multiple food types if time permits
    //  The options here off the top of my head are a random
    //  food item for each feeding, or another sub menu that
    //  lets you choose the type of food.
    const myFoodFill = 10;
    setPet((pet) => ({
      ...pet,
      hunger: Math.max(pet.hunger - myFoodFill, 0),
      state: PetState.BITE,
      action: PetAction.EAT,
    }));
    pet.hunger -= myFoodFill;
  }

  function playWithPet() {
    const myHappinessIncrease = 5;
    const energyDecrease = 5;
    setPet((pet) => ({
      ...pet,
      happiness: Math.min(pet.happiness + myHappinessIncrease, 100),
      energy: Math.max(pet.energy - energyDecrease, 0),
      state: PetState.JUMP,
      action: PetAction.PLAY,
    }));
  }

  function restPet() {
    const hungerIncrease = 5;
    const energyIncrease = 5;
    setPet((pet) => ({
      ...pet,
      hunger: Math.min(pet.hunger + hungerIncrease, 100),
      energy: Math.min(pet.energy + energyIncrease, 100),
      state: PetState.SLEEP,
      action: PetAction.SLEEP,
    }));
  }

  function savePetData() {
    localStorage.setItem(saveKey, JSON.stringify(pet));
  }

  function loadPetData() {
    pet = JSON.parse(localStorage.getItem(saveKey) || "");
    if (typeof pet !== "undefined") {
      setPet(pet);
      setGameStarted(true);
    }
  }

  function startGame() {
    const petName = (document.getElementById("pet-name") as HTMLInputElement)
      .value;

    setPet({
      ...pet,
      name: petName,
    });
    setGameStarted(true);
  }

  return (
    <div>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>
      <main>
        <section className="pet-info">
          <div className="pet-shell">
            <div className="pet-screen">
              <p className="pet-sprite">{getPetEmoji(calculatePetMood(pet))}</p>
            </div>

            <div className="pet-buttons">
              <button
                onClick={() => doAction(PetAction.EAT)}
                className="pet-button pet-buttons-left"
              >
                EAT
              </button>
              <button
                onClick={() => doAction(PetAction.PLAY)}
                className="pet-button pet-buttons-center"
              >
                PLAY
              </button>
              <button
                onClick={() => doAction(PetAction.SLEEP)}
                className="pet-button pet-buttons-right"
              >
                SLEEP
              </button>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <StatBar label="Hunger" value={pet.hunger} icon="🍽️" />
          <StatBar label="Happiness" value={pet.happiness} icon="😊" />
          <StatBar label="Energy" value={pet.energy} icon="⚡" />
        </section>

        <section className="start-game-container">
          {!gameStarted ? (
            <div id="start-questions">
              <form>
                <p>
                  What is your pet's name?{" "}
                  <input
                    id="pet-name"
                    required={true}
                    pattern="[A-Za-z0-9]{1,20}"
                  />
                </p>
                <button id="set-name-btn" onClick={startGame}>
                  Start Game
                </button>
              </form>
            </div>
          ) : (
            <div id="hud">
              <h2>Pet Name: {pet.name}</h2>
              <p id="pet-species">Species: {pet.species}</p>
              <p id="happiness-meter">Happiness: {pet.happiness}</p>
              <p id="hunger-meter">Hunger: {pet.hunger}</p>
              <p id="energy-meter">Energy: {pet.energy}</p>
            </div>
          )}
          <p id="pet-fact">Pet Fact: {fact}</p>
          <button id="save-game" onClick={savePetData}>
            Save
          </button>
          <button id="load-game" onClick={loadPetData}>
            Load
          </button>
          <p>Hint: Double click each button to perform its action</p>
        </section>
      </main>
    </div>
  );
}
