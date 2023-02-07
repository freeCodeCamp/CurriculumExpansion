import { Plant } from "./Plant";

class VegetablePlant extends Plant {
  constructor(name) {
    super(name);
    this.numVegetables = 0;
  }

  addVegetable() {
    this.numVegetables += 1;
  }

  harvest() {
    console.log("You got " + this.numVegetables + " " + this.name);
    const harvestedVegetables = this.numVegetables;
    this.numVegetables = 0;
    return harvestedVegetables;
  }
}

export { VegetablePlant };
