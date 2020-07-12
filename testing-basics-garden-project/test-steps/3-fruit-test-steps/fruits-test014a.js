import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Fruit Tree Tests", function () {
    let myFruitTree;

    beforeEach(() => {
        myFruitTree = new FruitTree("Strawberry");
    });

    it("should be a fruit tree", function () {
        assert.instanceOf(myFruitTree, FruitTree);
    });

    it("should be given a name", function () {
        assert.equal(myFruitTree.name, "Strawberry");
    });

    it("should be watered", function () {
        myFruitTree.water();
        assert.strictEqual(myFruitTree.lastDayWatered, 0);
    });

    it("can be neglected", function () {
        myFruitTree.neglect();
    });
});

/*
    You can check if a `Plant` is neglected if `lastDayWatered` is greater than 0.
    Write an `assert` statement checking if the `lastDayWatered` property of `myFruitTree` is greater than `0`.
*/