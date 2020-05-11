import { Plant } from "../src/Plant";
const chai = require("chai");
const assert = chai.assert;

describe("Plant Tests", function() {
  let myPlant;

  beforeEach(() => {
    myPlant = new Plant("Sunflower");
  });

  it("should be a plant", function() {
    assert.instanceOf(myPlant, Plant);
  });

  it("should be given a name", function() {
    assert.equal(myPlant.name, "Sunflower");
  });

  it("should be watered", function() {
    myPlant.water();
    assert.strictEqual(myPlant.lastDayWatered, 0);
  });

  it("can be neglected", function() {
    myPlant.neglect();
    assert.isAbove(myPlant.lastDayWatered, 0);
  });

  it("should wither after 3 days of being neglected", function() {
    for (let i = 0; i < 3; i++) {
      myPlant.neglect();
    }
    assert.isTrue(myPlant.withered);
  });

  it("should recover after being watered", function() {
    for (let i = 0; i < 3; i++) {
      myPlant.neglect();
    }
    myPlant.water();
    assert.isFalse(myPlant.withered);
  });
});
