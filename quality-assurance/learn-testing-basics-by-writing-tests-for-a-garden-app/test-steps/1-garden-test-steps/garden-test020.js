import { Garden } from "../src/Garden";
import { FruitTree } from "../src/FruitTree";
import { VegetablePlant } from "../src/VegetablePlant";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden;

   beforeEach(() => {
      myGarden = new Garden();
   });

   it("should be able to create a Garden", function () {
      assert.instanceOf(myGarden, Garden);
   });

   describe("Garden with fruit trees", function () {
      let myFruitTree;

      beforeEach(() => {
         myFruitTree = new FruitTree("Strawberry");
      });

      it("should be able to add fruit trees", function () {
         myGarden.addPlant(myFruitTree);
         assert.isAbove(myGarden.fruitTrees.length, 0);
      });

      it("should not allow more than 5 fruit trees", function () {
         for (let i = 0; i < 6; i++) {
            myGarden.addPlant(myFruitTree);
         }
         assert.isAtMost(myGarden.fruitTrees.length, 5);
      });
   });

   describe("Garden with vegetable plants", function () {

   });
});

// Inside our new `describe` block, declare a variable `myVegetablePlant` and assign it to a new `VegetablePlant` with `"Cabbage"` as a parameter.