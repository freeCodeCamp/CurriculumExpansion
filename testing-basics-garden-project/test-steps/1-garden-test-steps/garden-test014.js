import { Garden } from "../src/Garden";
import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden = new Garden();
   let myFruitTree = new FruitTree("Strawberry");
   it("should be able to create a Garden", function () {
      assert.instanceOf(myGarden, Garden);
   });

   it("should be able to add fruit trees", function () {
      myGarden.addPlant(myFruitTree);
      assert.isAbove(myGarden.fruitTrees.length, 0);
   });

   it("should not allow more than 5 fruit trees", function () {
      for (let i = 0; i < 6; i++) {
         myGarden.addPlant(myFruitTree);
      }
   });
});

// After the `for` loop, use the `isAtMost` method to write an assert statement that checks if the length of `fruitTrees` in `myGarden` is at most 5.