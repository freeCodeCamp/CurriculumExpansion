import { Garden } from "../src/Garden";
import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden = new Garden();
   it("should be able to create a Garden", function () {
      assert.instanceOf(myGarden, Garden);
   });
});

// Inside the `describe` block, declare a variable `myFruitTree` and assign it to a new `FruitTree` with `"Strawberry"` as a parameter.