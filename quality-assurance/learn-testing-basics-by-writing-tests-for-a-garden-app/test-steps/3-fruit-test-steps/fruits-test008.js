import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Fruit Tree Tests", function () {
    let myFruitTree;

    beforeEach(() => {
        myFruitTree = new FruitTree("Strawberry");
    });

    it("should be a fruit tree", function () {

    });
});

/*
    Great! Now, let's verify if our `myFruitTree` variable is really a `FruitTree`.
    In our new test case, write an `assert` statement checking if the variable `myFruitTree` is an instance of `FruitTree`.
*/