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
  HALT,
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

interface MonsterImages {
  Idle: string;
  Death: string;
  Sleep: string;
  Wake: string;
  Walk: string;
  Turn: string;
  Jump: string;
  Attack_Bite: string;
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

const saveKey = "pet";

enum Button {
  LEFT,
  CENTER,
  RIGHT,
}

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
  const [factVisible, setFactVisible] = useState(false);
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

  const setPetActionTimeout = () => {
    setTimeout(() => {
      setPet((pet) => ({
        ...pet,
        state: PetState.IDLE,
        action: PetAction.NONE,
      }));
    }, 2 * 1000);
  };

  const setMiscFactTimeout = () => {
    setTimeout(() => {
      setPet((pet) => ({
        ...pet,
        state: PetState.IDLE,
        action: PetAction.NONE,
      }));
      setFactVisible(false);
    }, 10 * 1000);
  };

  function doAction(action: PetAction | MiscAction) {
    switch (action) {
      case PetAction.EAT:
        setPetActionTimeout();
        feedPet();
        break;
      case PetAction.SLEEP:
        setPetActionTimeout();
        restPet();
        break;
      case PetAction.PLAY:
        setPetActionTimeout();
        playWithPet();
        break;
      case MiscAction.FACT:
        setMiscFactTimeout();
        setPet((pet) => ({
          ...pet,
          action: PetAction.HALT,
        }));
        setFactVisible(true);
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
    <>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>

      <div className="start-game-container">
        <div className="pet-shell">
          <div className="pet-screen">
            <div
              className="pet-fact"
              style={{ visibility: factVisible ? "visible" : "hidden" }}
            >
              {fact}
            </div>
            <div className="pet-hud">
              <div id="pet-species">Cat</div>
              {/*
              <HappinessIcon happinessThreshold={getHappinessThreshold()} />
              <HungerIcon hungerThreshold={getHungerThreshold()} />
              <BatteryIcon batteryThreshold={getEnergyThreshold()} />
              */}
            </div>
            <p className="pet-sprite">🐱</p>
          </div>

          <div className="pet-buttons">
            <button
              onClick={() => doAction(PetAction.EAT)}
              className="pet-button pet-buttons-left"
            ></button>
            <button
              onClick={() => doAction(PetAction.PLAY)}
              className="pet-button pet-buttons-center"
            ></button>
            <button
              onClick={() => doAction(PetAction.SLEEP)}
              className="pet-button pet-buttons-right"
            ></button>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <StatBar label="Hunger" value={pet.hunger} icon="🍽️" />
        <StatBar label="Happiness" value={pet.happiness} icon="😊" />
        <StatBar label="Energy" value={pet.energy} icon="⚡" />
      </div>

      <div className="start-game-container">
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
      </div>
    </>
  );
}
