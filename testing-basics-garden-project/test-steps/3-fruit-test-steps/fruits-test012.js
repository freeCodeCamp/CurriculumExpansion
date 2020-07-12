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

    });
});

/*
    Let's water `myFruitTree`. Check out how to `water` a `Plant` in the `Plant.js` file in the `src` directory.
    Then, water `myFruitTree` in the `"should be watered"` test case.
*/