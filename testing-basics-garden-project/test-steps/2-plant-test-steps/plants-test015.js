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
        myPlant.neglect();
        assert.isAbove(myPlant.lastDayWatered, 0);
    });
});

/*
    Let's create another test case to verify that our plant withers after 3 days of being neglected.
    Create a test case with the string `"should wither after 3 days of being neglected"` and pass in an empty function.
*/