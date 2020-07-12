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

   });
});

/*
  Add `myFruitTree` to `myGarden` in the `"should be able to add fruit trees"` test case.
  NOTE: Check out how `FruitTrees` are added to `Garden`'s in the `Garden.js` file
*/