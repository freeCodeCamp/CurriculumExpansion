import { Plant } from "./Plant";

class FruitTree extends Plant {
  constructor(name) {
    super(name);
    this.numFruits = 0;
  }

  addFruit() {
    this.numFruits += 1;
  }

  harvest() {
    console.log("You got " + this.numFruits + " " + this.name);
    const harvestedFruits = this.numFruits;
    this.numFruits = 0;
    return harvestedFruits;
  }
}

export { FruitTree };
