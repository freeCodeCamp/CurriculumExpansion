import { VegetablePlant } from "../src/VegetablePlant";
const chai = require("chai");
const assert = chai.assert;

describe("Vegetable Plant Tests", function () {
    let myVegetablePlant;

    beforeEach(() => {
        myVegetablePlant = new VegetablePlant("Cabbage");
    });
});

// Under the beforeEach block, write a test case for the vegetable plant using `it` and use `"should be a vegetable plant"` as the string describing the test and pass in an empty function.