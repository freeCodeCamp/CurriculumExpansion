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
    });
});

/*
    You can check if a `Plant` is watered if `lastDayWatered` is strictly equal to 0.
    We want strict equality since `lastDayWatered` could be `null`.
    Write an `assert` statement checking if the `lastDayWatered` property of `myVegetablePlant` is strictly equal to `0`.
*/