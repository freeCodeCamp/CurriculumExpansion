// Start with an empty recipes array
const recipes = [];

/* Have campers create 3 objects.
Walk them through the creation of the recipe1 object, then make them create the remaining two.
*/

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '', // have dificulty level start as an empty array instead of null so we can make campers push either easy, medium, or hard
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: [
    'chicken breast',
    'coconut milk',
    'curry powder',
    'onion',
    'garlic',
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

// Push recipes1, 2, and 3 into the recipes array
recipes.push(recipe1, recipe2, recipe3);

// Calculate average rating
function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return (total / ratings.length).toFixed(2);
}

// Calculate total number of ingredients
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// Calculate difficulty level based on cooking time
function getDificultyLevel(cookingTime) {
  if (cookingTime < 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

// Process recipe1
const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(`Recipe 1 Average Rating ${recipe1AverageRating}`);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(`REcipe 1 Total Ingredients: ${recipe1TotalIngredients}`);

const recipe1DifficultyLevel = getDificultyLevel(recipe1.cookingTime);
console.log(`Recipe 1 Difficulty: ${recipe1DifficultyLevel}`);
console.log('\n');

/*
// Optional - Process recipe2
const recipe2AverageRating = getAverageRating(recipe2.ratings);
console.log(`Recipe 2 Average Rating: ${recipe2AverageRating}`);

const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
console.log(`Recipe 2 Total Ingredients: ${recipe2TotalIngredients}`);

const recipe2DifficultyLevel = getDificultyLevel(recipe2.cookingTime);
console.log(`REcipe 2 Difficulty Level: ${recipe2DifficultyLevel}`);
console.log('\n');

// Optional – Process recipe3
const recipe3AverageRating = getAverageRating(recipe3.ratings);
console.log(`Recipe 3 Average Rating: ${recipe3AverageRating}`);

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(`REcipe 3 Total Ingredients: ${recipe3TotalIngredients}`);

const recipe3DifficultyLevel = getDificultyLevel(recipe3.cookingTime);
console.log(`Recipe 3 Difficulty Level: ${recipe3DifficultyLevel}`);
*/

// Fill up each item of the recipes array with averageRating, totalIngredients, and difficultyLevel

for (const recipe of recipes) {
  recipe.averageRating = getAverageRating(recipe.ratings);
  recipe.totalIngredients = getTotalIngredients(recipe.ingredients);
  recipe.difficultyLevel = getDificultyLevel(recipe.cookingTime);
}

// recipes array should now have everything filled up
console.log(recipes);
