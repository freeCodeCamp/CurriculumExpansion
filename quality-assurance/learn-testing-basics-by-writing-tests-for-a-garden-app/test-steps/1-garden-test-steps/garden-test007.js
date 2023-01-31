import { Garden } from '../src/Garden';
const chai = require("chai");
const assert = chai.assert;

let myGarden = new Garden();

it("should be able to create a Garden", function () {
   assert.instanceOf(myGarden, Garden);
})

/* 
  Now we can describe our tests and our test framework will describe which tests are passing.
  We can organize our tests further by grouping them with `describe`.
  With our `Plane` example, if I wanted to group the tests into `"Plane Tests"`, I can write this:
  ```
      describe("Plane tests", function(){
         it("should be a plane", function(){
           assert.instanceOf(myPlane, Plane)
         })
      })
  ```
   Put the test that you currently have into a test block using `describe`.
   Call the test block `"Garden tests"`.
*/