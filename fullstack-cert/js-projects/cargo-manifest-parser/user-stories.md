In this lab, you will normalize and validate cargo manifests that arrive as inconsistent JSON payloads. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

Each cargo manifest will be represented as an object with the following structure:

```js
{
containerId: 0,
destination: "Monterey, California, USA",
weight: 340.50,
unit: "kg", 
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

1. You should accept an array of manifest objects `{ containerId, destination, weight, unit, hazmat}`.
2. You should implement the function `normalizeUnits(manifest)`, which converts a manifest object's weight to kilograms without mutating the source object (return a new object). Use the approximate conversion, 1 lb = 0.45 kg.
3. You should implement the function `validateManifest(manifest)` with the following behavior:
- If the input manifest is valid, return an empty object `{}`.
- If any fields are invalid or missing, return an object describing those fields; specifically, `missingField: "Missing"` and `invalidField: "Invalid"`. Here is an example return where the original object is missing the `destination` field and has an invalid `weight` field: 
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
4. You should implement the function `summarizeByDestination(manifests)`, which reduces an array of manifest objects into the following format: `{ destination: { totalWeight, hazmatCount } }`.
- Example of a valid return: 
```js
{
  "Monterey, California, USA": {
    totalWeight: 1060.50,
    hazmatCount: 4
  },
  "Austin, Texas, USA": {
    totalWeight: 850.30,
    hazmatCount: 3
  }
}
```
- `totalWeight` should be in kilograms.
- `hazmatCount` should count only manifests where `hazmat` is true.
5. You should implement the function `reportErrors(manifests)`, which accepts an array of manifest objects and logs validation errors for any that have missing or invalid fields.
- Log failures to the console with the following format: `console.log("Validation error at container: " + containerId)`.