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
   });
});

/*
  Great! Now that we added `myFruitTree` to `myGarden`, we can write a test to make sure it's working.
  We can do this using the `isAbove` assert method from Chai.
  The method works like this:
  `assert.isAbove(a, 2) // Checks if a > 2`
  Write an assert using `isAbove` to check if the `FruitTree` was added to the `Garden`.
  The assert should check if the length of `fruitTrees` in `myGarden` is greater than 0.
*/