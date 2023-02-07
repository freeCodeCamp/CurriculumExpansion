import { Garden } from "../src/Garden";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden = new Garden();
   it("should be able to create a Garden", function () {
      assert.instanceOf(myGarden, Garden);
   });
});

/* 
  Great! Now we can group tests into test blocks with `describe`.
  Let's test against more requirements.
  A garden should be able to add different kinds of plants. Let's start with Fruit Trees!
  Import `FruitTree` from the `FruitTree.js` file in `src`.
*/