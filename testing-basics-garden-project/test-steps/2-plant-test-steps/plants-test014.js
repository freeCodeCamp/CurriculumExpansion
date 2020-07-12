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
        myPlant.water();
        assert.strictEqual(myPlant.lastDayWatered, 0);
    });

    it("can be neglected", function () {

    });
});

/*
    We must neglect our plant for this test case.
    Check out how to `neglect` a `Plant` in the `Plant.js` file in the `src` directory.
    Then, neglect `myPlant` in the `"can be neglected"` test case.
*/