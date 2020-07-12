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
        assert.equal(myPlant.name, "Sunflower");
    });

    it("should be watered", function () {

    });
});

/*
    Let's water `myPlant`. Check out how to `water` a `Plant` in the `Plant.js` file in the `src` directory.
    Then, water `myPlant` in the `"should be watered"` test case.
*/