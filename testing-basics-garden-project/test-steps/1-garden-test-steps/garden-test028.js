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
      let myVegetablePlant;
      beforeEach(() => {
         myVegetablePlant = new VegetablePlant("Cabbage");
      });

      it("should be able to add vegetables", function () {
         myGarden.addPlant(myVegetablePlant);
         assert.isAbove(myGarden.vegetablePlants.length, 0);
      });

      it("should not allow more than 10 vegetable plants", function () {
         for (let i = 0; i < 11; i++) {
            myGarden.addPlant(myVegetablePlant);
         }
         assert.isAtMost(myGarden.vegetablePlants.length, 10);
      });
   });
});

/*
   You're doing great! We only have the `Plant` object left to test against for the `Garden` object.
   Import `Plant` from the `Plant.js` file in `src`.
*/