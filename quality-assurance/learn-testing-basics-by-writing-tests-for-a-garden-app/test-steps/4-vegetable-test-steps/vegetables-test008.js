import { VegetablePlant } from "../src/VegetablePlant";
const chai = require("chai");
const assert = chai.assert;

describe("Vegetable Plant Tests", function () {
    let myVegetablePlant;

    beforeEach(() => {
        myVegetablePlant = new VegetablePlant("Cabbage");
    });

    it("should be a vegetable plant", function () {

    });
});

/*
    Great! Now, let's verify if our `myVegetablePlant` variable is really a `VegetablePlant`.
    In our new test case, write an `assert` statement checking if the variable `myVegetablePlant` is an instance of `VegetablePlant`.
*/