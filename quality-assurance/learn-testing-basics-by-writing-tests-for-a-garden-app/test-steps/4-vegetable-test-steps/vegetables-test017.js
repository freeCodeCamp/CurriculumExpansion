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
        myVegetablePlant.neglect();
        assert.isAbove(myVegetablePlant.lastDayWatered, 0);
    });

    it("should wither after 3 days of being neglected", function () {
        for (let i = 0; i < 3; i++) {
            myVegetablePlant.neglect();
        }
    });
});

/*
    When a plant is withered, the `withered` property is set to the boolean `true`.
    Write an `assert` statement checking if the `withered` property of `myVegetablePlant` is true.
*/