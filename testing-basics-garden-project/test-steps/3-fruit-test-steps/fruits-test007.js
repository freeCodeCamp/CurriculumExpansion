import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Fruit Tree Tests", function () {
    let myFruitTree;

    beforeEach(() => {
        myFruitTree = new FruitTree("Strawberry");
    });
});

// Under the beforeEach block, write a test case for the fruit tree using `it` and use `"should be a fruit tree"` as the string describing the test and pass in an empty function.