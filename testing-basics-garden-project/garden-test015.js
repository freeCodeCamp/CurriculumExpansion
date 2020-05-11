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
   })

   it("should not allow more than 5 fruit trees", function () {
      for (let i = 0; i < 6; i++) {
         myGarden.addPlant(myFruitTree);
      }
      assert.isAtMost(myGarden.fruitTrees.length, 5);
   });
});

/* Our tests pass, but they are not independent of other tests
   This can cause problems for future tests
   We can setup what happens before each test using "beforeEach"
   Use "beforeEach" to setup the myGarden variable for every test case
   e.g.
      describe("Tests", function(){
         let initialVar
         beforeEach(() => {
            // setup code for initialVar
         })
      })
*/