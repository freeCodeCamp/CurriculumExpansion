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
        assert.isAbove(myFruitTree.lastDayWatered, 0);
    });

    it("should wither after 3 days of being neglected", function () {
        for (let i = 0; i < 3; i++) {
            myFruitTree.neglect();
        }
        assert.isTrue(myFruitTree.withered);
    });
});

/*
    The last plant requirement is `"The plants need to be watered to recover"`.
    Create a test case with the string `"should recover after being watered"` and pass in an empty function.
*/