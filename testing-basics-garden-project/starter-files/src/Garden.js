class Garden {
  constructor() {
    this.fruitTrees = [];
    this.vegetablePlants = [];
    this.miscPlants = [];
  }

  addPlant(plant) {
    const plantType = plant.constructor.name;
    switch (plantType) {
      case "FruitTree":
        if (this.fruitTrees.length === 5) {
          console.log("There are too many fruit trees");
        } else {
          this.fruitTrees.push(plant);
        }
        break;
      case "VegetablePlant":
        if (this.vegetablePlants.length === 10) {
          console.log("There are too many vegatable plants");
        } else {
          this.vegetablePlants.push(plant);
        }
        break;
      case "Plant":
        if (this.miscPlants.length === 7) {
          console.log("There are too many misc plants");
        } else {
          this.miscPlants.push(plant);
        }
        break;
      default:
        console.log("That's not a plant");
        break;
    }
  }
}

export { Garden };
