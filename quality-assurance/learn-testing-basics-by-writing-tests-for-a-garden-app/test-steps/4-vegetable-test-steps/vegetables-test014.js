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

    it("should be watered", function () {
        myVegetablePlant.water();
        assert.strictEqual(myVegetablePlant.lastDayWatered, 0);
    });

    it("can be neglected", function () {

    });
});

/*
    We must neglect our vegetable plant for this test case.
    Check out how to `neglect` a `Plant` in the `Plant.js` file in the `src` directory.
    Then, neglect `myVegetablePlant` in the `"can be neglected"` test case.
*/