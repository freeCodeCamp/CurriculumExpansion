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

interface Pet {
  name: string;
  happiness: number;
  hunger: number;
  energy: number;
  species: string;
}

enum PetMood {
  Happy,
  Excited,
  Content,
  Sad,
  Tired,
  Sick,
  Hungry,
}

export function calculatePetMood(pt: Pet): PetMood {
  const { hunger, happiness, energy } = pt;

  if (hunger > 70) return PetMood.Hungry;
  if (energy < 30) return PetMood.Tired;
  if (happiness < 30) return PetMood.Sad;
  if (happiness > 80 && energy > 70) return PetMood.Excited;
  if (happiness > 60) return PetMood.Happy;

  return PetMood.Content;
}

const moodEmojiMap: Record<PetMood, string> = {
  [PetMood.Happy]: "😺", // grinning cat
  [PetMood.Excited]: "😻", // heart-eyes cat
  [PetMood.Content]: "😸", // smiling cat
  [PetMood.Sad]: "😿", // crying cat
  [PetMood.Tired]: "😽", // kissing cat (closest to sleepy)
  [PetMood.Sick]: "🙀", // weary cat (looks unwell)
  [PetMood.Hungry]: "😹", // joy cat (closest to hungry/funny)
};

const saveKey = "pet";

interface usePetProps {
  isGameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

function usePet({
  isGameStarted, setGameStarted,
}: usePetProps) {
  let [pet, setPet] = useState<Pet>({
    name: "",
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: "Cat",
  });

  useEffect(() => {
    console.log("PLEASE BORTHER!");
    if (!isGameStarted) return;
    console.log("Excellent, Borther.");

    const interval = setInterval(() => {
      setPet((pet) => ({
        ...pet,
        happiness: Math.max(pet.happiness - 5, 0),
        hunger: Math.min(pet.hunger + 5, 100),
      }));
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [isGameStarted]);

  function doAction(action: PetAction) {
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
    const myFoodFill = 10;
    setPet((pet) => ({
      ...pet,
      hunger: Math.max(pet.hunger - myFoodFill, 0),
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
    }));
  }

  function restPet() {
    const hungerIncrease = 5;
    const energyIncrease = 5;
    setPet((pet) => ({
      ...pet,
      hunger: Math.min(pet.hunger + hungerIncrease, 100),
      energy: Math.min(pet.energy + energyIncrease, 100),
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

  return {
    pet, doAction,
    savePetData, loadPetData,
    setName: (name: string) => setPet({...pet, name}),
  };
}

export function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  let {
    pet, 
    doAction,
    savePetData, loadPetData,
    setName,
  } = usePet({ isGameStarted, setGameStarted });

  let petRef = useRef<Pet>(pet);
  useEffect(() => {
    petRef.current = pet;
  }, [pet]);

  const [fact, setFact] = useState<string | null>("");

  //TODO: Integrate with the FCC API once it's ready.
  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * catFacts.length) - 1;
    const currentFact = catFacts[randomNumber];
    setFact(currentFact);
  }, []);



  function startGame() {
    const petName = (document.getElementById("pet-name") as HTMLInputElement)
      .value;

    setName(petName);
    setGameStarted(true);
  }

  return (
    <main>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>

      <section className="base-container game-container">
        <div className="pet-screen">
          <p className="pet-sprite">{moodEmojiMap[calculatePetMood(pet)]}</p>
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
      </section>

      <section className="stats-grid">
        <StatBar label="Hunger" value={pet.hunger} icon="🍽️" />
        <StatBar label="Happiness" value={pet.happiness} icon="😊" />
        <StatBar label="Energy" value={pet.energy} icon="⚡" />
      </section>

      <section className="base-container info-panel">
        {!isGameStarted ? (
          <form className="start-questions">
            <label htmlFor="pet-name">What is your pet's name? </label>
            <div>
              <input
                id="pet-name"
                name="pet-name"
                required={true}
                pattern="[A-Za-z0-9]{1,20}"
              />
              <button id="set-name-btn" onClick={startGame}>
                Start Game
              </button>
            </div>
          </form>
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
        <div className="data-management">
          { isGameStarted ?
          <button id="save-game" onClick={savePetData}>
            Save
          </button>
            :
          <button id="load-game" onClick={loadPetData}>
            Load
          </button>
          }
        </div>
      </section>
    </main>
  );
}
