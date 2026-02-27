In this lab, you will leverage JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

Each cargo manifest will be represented as an object with the following structure:

```js
{
containerId: 0,
destination: "Monterey, California, USA",
weight: 340.50,
unit: "lb", 
hazmat: false
}
```

Note that each cargo manifest object should contain: 
- `containerId`: a unique integer value identifying the cargo container
- `destination`: a string denoting the cargo's target destination
- `weight`: a numerical float value representing the cargo's weight
- `unit`: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
- `hazmat`: a boolean value indicating whether hazardous material handling is needed

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should implement the function `normalizeUnits(manifest)`, which converts a manifest object's weight to kilograms without mutating the source object (return a new object). Use the approximate conversion, 1 lb = 0.45 kg.
2. You should implement the function `validateManifest(manifest)` with the following behavior:
- If the manifest is valid (no missing or invalid fields), return an empty object `{}`.
- If any of the input manifest's fields are invalid or missing, return an object describing those fields; specifically, `missingField: "Missing"` and `invalidField: "Invalid"`. Here is an example return where the original object is missing the `destination` field and has an invalid `weight` field: 
```js
 {
    destination: "Missing",
    weight: "Invalid"
 }
```
- A field is invalid if: 
    - `destination` is not a non-empty string
    - `weight` is not a positive number
    - `unit` is neither "kg" nor "lb"
    - `hazmat` is not a boolean
3. You should implement the function `processManifest(manifest)`, which accepts a manifest object, and:
  - If the manifest is valid, log `Validation success: ${containerId}`. Then, log the manifest's weight in kilograms in the following format `Total weight: ${weight} kg`.
  - If the manifest is not valid, log: `Validation error: ${containerId}`. Then, log the object which is returned by calling `validateManifest()` on the original manifest.