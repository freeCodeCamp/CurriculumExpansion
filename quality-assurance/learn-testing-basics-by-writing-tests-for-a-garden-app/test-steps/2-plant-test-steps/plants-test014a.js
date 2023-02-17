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
    });
});

/*
    You can check if a `Plant` is neglected if `lastDayWatered` is greater than 0.
    Write an `assert` statement checking if the `lastDayWatered` property of `myPlant` is greater than `0`.
*/