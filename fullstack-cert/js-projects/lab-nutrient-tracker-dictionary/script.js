const chilli = {
  "red beans": {
    calories: 49,
    protein: 3,
    carbs: 9,
    fat: 0.2,
  },
  "brown rice": {
    calories: 444,
    protein: 10,
    carbs: 93,
    fat: 4,
  },
  tomatoes: {
    calories: 32,
    protein: 2,
    carbs: 7,
    fat: 0.3,
  },
  "sweet peppers": {
    calories: 25,
    protein: 1,
    carbs: 6,
    fat: 0.2,
  },
  onions: {
    calories: 44,
    protein: 1,
    carbs: 10,
    fat: 0.1,
  },
  corn: {
    calories: 67,
    protein: 2,
    carbs: 15,
    fat: 1,
  },
  chickpeas: {
    calories: 106,
    protein: 6,
    carbs: 16,
    fat: 2,
  },
  garlic: {
    calories: 9,
    protein: 1.44,
    carbs: 7.38,
    fat: 0.27,
  },
};

function cloneDictionary(dictionary) {
  return { ...dictionary };
}

function addMealEntry(dictionary, entry) {
  const macroKeys = ["calories", "protein", "carbs", "fat"];

  if (
    !Object.keys(entry).includes("ingredient") ||
    typeof entry["ingredient"] !== "string"
  ) {
    return 'Entry must include a "ingredient" key, with a "string" value.';
  }
  for (const macroKey of macroKeys) {
    if (
      !Object.keys(entry).includes(macroKey) ||
      typeof entry[macroKey] !== "number"
    ) {
      return `Entry must include a "${macroKey}" key, with a "number" value.`;
    }
  }

  const clonedDictionary = cloneDictionary(dictionary);
  const { ingredient } = entry;
  const { calories, protein, carbs, fat } = entry;

  if (clonedDictionary[ingredient] === undefined) {
    clonedDictionary[ingredient] = { calories, protein, carbs, fat };
  }
  dictionary = clonedDictionary;
  return clonedDictionary;
}

function getIngredientTotals(dictionary, ingredient) {
  if (!Object.keys(dictionary).includes(ingredient)) {
    return `"${ingredient}" not found in the dictionary.`;
  } else {
    for (const clonedIngredient of Object.entries(dictionary)) {
      if (clonedIngredient[0] === ingredient) {
        return clonedIngredient;
      }
    }
  }
}

function listTopIngredients(dictionary, key, limit) {
  const clonedDict = cloneDictionary(dictionary);
  const ingredientsSortedPerMacro = Object.entries(clonedDict);

  ingredientsSortedPerMacro.sort((a, b) => b[1][key] - a[1][key]);
  return ingredientsSortedPerMacro.slice(0, limit);
}
