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

    it("should wither after 3 days of being neglected", function () {
        for (let i = 0; i < 3; i++) {
            myPlant.neglect();
        }
    });
});

/*
    When a plant is withered, the `withered` property is set to the boolean `true`.
    We can assert if a value is true with chai's `isTrue` method,.
    For example, if I create a variable `blueSky` and set it to `true`,
    I can assert that `blueSky` is `true` with `assert.IsTrue(blueSky)`.
    Write an `assert` statement checking if the `withered` property of `myPlant` is true.
*/