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
});

/*
    Good job! Let's test the requirement `"Plants can be given a name"`
    Create a test case with the string `"should be given a name"` and pass in an empty function.
*/