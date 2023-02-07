import { Garden } from '../src/Garden';
const chai = require("chai");
const assert = chai.assert;

let myGarden = new Garden();

assert.instanceOf(myGarden, Garden);

/* 
  Now that we can test our code with `assert`, let's organize our code into test cases
  For example, if I want to describe that `myPlane` should be a `Plane`,
  I can write:
  ```
      it("should be a plane", function(){
         assert.instanceOf(myPlane, Plane)
      })
  ```
  Write a test case for the garden using `it` and use `"should be able to create a Garden"` as the string describing the test.
*/