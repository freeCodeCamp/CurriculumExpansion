class Plant {
  constructor(name) {
    this.name = name;
    this.lastDayWatered = 0;
    this.withered = false;
  }

  water() {
    this.lastDayWatered = 0;
    this.withered = false;
  }

  neglect() {
    this.lastDayWatered += 1;
    console.log("You neglected your plant :(");
    if (this.lastDayWatered >= 3) {
      this.withered = true;
      console.log("Your plant is withered :'(");
    }
  }
}

export { Plant };
