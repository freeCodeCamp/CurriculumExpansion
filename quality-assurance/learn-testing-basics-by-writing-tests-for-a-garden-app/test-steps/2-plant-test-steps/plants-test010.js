import { Plant } from "../src/Plant";
const chai = require("chai");
const assert = chai.assert;

describe("Plant Tests", function () {
    let myPlant;

    beforeEach(() => {
        myPlant = new Plant("Sunflower");
    });

    it("should be a plant", function () {
        assert.instanceOf(myPlant, Plant);
    });

    it("should be given a name", function () {

    });
});

/*
    Now, we can write an assert statement to verify that the name of `myPlant` is equal to `"Sunflower"`.
    For example, if I create a `myPlane` variable and initialize the name of `myPlane` to `"B737"`,
    I can check if the name of`myPlane` is equal to `"B737"` with `assert.equal(myPlane.name, "B737")`
    Write an assert statement checking if the name of `myPlant` is equal to `"Sunflower"` in our new test case.
*/