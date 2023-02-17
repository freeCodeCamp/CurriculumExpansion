import { Garden } from "../src/Garden";
import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden;

   beforeEach(() => {
      myGarden = new Garden();
   });

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
      assert.isAtMost(myGarden.fruitTrees.length, 5);
   });
});

/*
   Test blocks can be nested inside of other test blocks to better identify where problems may reside.
   With our plane example, if I wanted to group `"Jet Plane Tests"` into `"Plane tests"`, I can write this:
   ```
      describe("Plane tests", function(){
         describe("Jet Plane tests", function(){
            // Your test cases
         })
      })
   ```
   Create a test block inside of `"Garden tests"` called  `"Garden with fruit trees"` with your fruit tree test cases.
*/
