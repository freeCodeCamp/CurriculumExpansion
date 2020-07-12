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
});

/* 
  Now, let's create a test case where the `Garden` should be able to add fruit trees.
  Define the test case with the string `"should be able to add fruit trees"` and pass in an empty function.
*/