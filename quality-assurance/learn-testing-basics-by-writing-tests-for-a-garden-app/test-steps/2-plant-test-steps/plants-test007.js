import { Plant } from "../src/Plant";
const chai = require("chai");
const assert = chai.assert;

describe("Plant Tests", function () {
    let myPlant;

    beforeEach(() => {
        myPlant = new Plant("Sunflower");
    });
});

// Under the beforeEach block, write a test case for the plant using `it` and use `"should be a plant"` as the string describing the test and pass in an empty function.