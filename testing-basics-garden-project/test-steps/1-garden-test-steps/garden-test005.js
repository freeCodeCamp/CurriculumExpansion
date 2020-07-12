import { Garden } from '../src/Garden';
const chai = require("chai");
const assert = chai.assert;

let myGarden = new Garden();

/* 
  Let's use our assert function by testing if a `Garden` object is an instance of `Garden`.
  For example, if I create a `Plane` object with the variable `myPlane`,
  I can assert that `myPlane` is a `Plane` object with `assert.instanceOf(myPlane, Plane)`.
  Write an `assert` statement checking if the variable `myGarden` is an instance of `Garden`.
*/ 