import { VegetablePlant } from "../src/VegetablePlant";
const chai = require("chai");
const assert = chai.assert;

describe("Vegetable Plant Tests", function () {
    let myVegetablePlant;

    beforeEach(() => {
        myVegetablePlant = new VegetablePlant("Cabbage");
    });

    it("should be a vegetable plant", function () {
        assert.instanceOf(myVegetablePlant, VegetablePlant);
    });
});

/*
    Good job! Let's test against more requirements.
    Let's test if our vegetable plants meet plants' requirements.
    The first requirement to test is `"Plants can be given a name"`.
    Create a test case with the string `"should be given a name"` and pass in an empty function.
*/