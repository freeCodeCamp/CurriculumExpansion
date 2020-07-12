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
});

/*
    Good job! Let's test against more requirements.
    Since fruit trees have the same requirements as plants, let's test if our fruit trees meet plants' requirements.
    The first requirement to test is `"Plants can be given a name"`.
    Create a test case with the string `"should be given a name"` and pass in an empty function.
*/