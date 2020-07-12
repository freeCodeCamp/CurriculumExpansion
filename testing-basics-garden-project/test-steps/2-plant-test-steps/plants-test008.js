import { Plant } from "../src/Plant";
const chai = require("chai");
const assert = chai.assert;

describe("Plant Tests", function () {
    let myPlant;

    beforeEach(() => {
        myPlant = new Plant("Sunflower");
    });

    it("should be a plant", function () {

    });
});

/*
    Great! Now, let's verify if our `myPlant` variable is really a `Plant`.
    In our new test case, write an `assert` statement checking if the variable `myPlant` is an instance of `Plant`.
*/