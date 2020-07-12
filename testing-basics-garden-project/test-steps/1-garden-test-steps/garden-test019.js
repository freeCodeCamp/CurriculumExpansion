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
});

/*
   We can start organizing our next tests with another describe block!
   Add a describe block under the `"Garden with fruit trees"` block called `"Garden with vegetable"` and pass in an empty function.
*/