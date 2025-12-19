In this lab, you will aggregate nutritional macros per ingredient inside nested dictionaries.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should accept meal entries shaped like `{ ingredient, calories, protein, carbs, fat }`.
2. You should implement `addMealEntry(dictionary, entry)` that clones and updates cumulative macros per ingredient.
3. You should implement `getIngredientTotals(dictionary, ingredient)` with guard clauses for unknown ingredients.
4. You should implement `listTopIngredients(dictionary, key, limit)` that sorts descending by a macro.
5. You should implement `cloneDictionary(dictionary)` to protect against accidental mutations.

Note: Use `Object.keys`, `Object.values`, and `Object.entries`. Include tests for aggregation accuracy and cloning behavior.
