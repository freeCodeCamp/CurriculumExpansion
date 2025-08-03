import { useState } from 'react';
import './App.css';



interface Pet
{
  name: String; 
  happiness: number; 
  hunger: number;
  energy: number; 
  species: String; 
}

const saveKey = "pet"


export function App()  {
  let myPet: Pet = {
    name: "",
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: "",
  }; 
  const [fact, setFact] = useState("");

  function feedPet() {
      // TODO: consider multiple food types if time permits
      const myFoodFill = 10;
      if (myPet.hunger - myFoodFill > 0) {
        myPet.hunger -= myFoodFill;
      } else {
        myPet.hunger = 0;
      }
    }

    function playWithPet() {
      const myHappinessIncrease = 5;
      const energyDecrease = 5;
      if (myPet.energy - energyDecrease > 0) {
        myPet.happiness += myHappinessIncrease;
        myPet.energy -= energyDecrease;
        fetchPetFact(); 
      } else {
        // Give warning that low energy
      }
    }

    function restPet() {
      const hungerDecrease = 5;
      const energyIncrease = 5;
      if (myPet.hunger - hungerDecrease > 0) {
        myPet.hunger -= 5;
        myPet.energy += energyIncrease;
      } else {
        // Give warning that low hunger
      }
    }

    function fetchPetFact() {
      // TODO: Put actual fetch here
      const petFact = JSON.parse(
        '{"fact":"Mimics have a shape-changing ability and can polymorph into any object."}'
      );
      setFact(petFact.fact); 
    }

    function savePetData() {
      localStorage.setItem(saveKey, JSON.stringify(myPet));
    }

    function loadPetData() {
      myPet = JSON.parse(localStorage.getItem(saveKey) || "");
    }

  return (
    <>
      <h1>Digital Pet Game</h1>
      <h2>Pet Name: {myPet.name}</h2>
      <p id="pet-species">Species: {myPet.species}</p>
      <p id="happiness-meter">Happiness: {myPet.happiness}</p>
      <p id="hunger-meter">Hunger: {myPet.hunger}</p>
      <p id="energy-meter">Energy: {myPet.energy}</p>
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
    </>
  );
}
