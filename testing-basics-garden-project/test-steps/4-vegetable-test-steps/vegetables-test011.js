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

    it("should be given a name", function () {
        assert.equal(myVegetablePlant.name, "Cabbage");
    });
});

/*
    Good job! The next requirement is `"The plants need to be watered"`.
    Create a test case with the string `"should be watered"` and pass in an empty function.
*/