/**
 *
 * This workshop will heavily rely on having campers create multiple curried
 * functions so they get comfortable with the concept.
 *
 */

// first few steps should be to have them create this table object
const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
};

// then have a step to create their first curried function
const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
};

// have campers test their function by calling it
const gramsResult = convertQuantity("cup")("gram")(2);
console.log(gramsResult);

// then have step just for creating this curried function
const adjustForServings = (baseQuantity) => (newServings) =>
  (baseQuantity / 1) * newServings;

// have a step just for testing the last function they created
const servingsResult = adjustForServings(4)(6);
console.log(servingsResult);

// have campers practice using the previous curried functions in this processIngredient function
const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};

// have step to query the DOM for the following values
const ingredient = document.getElementById("ingredient");
const quantity = document.getElementById("quantity");
const unit = document.getElementById("unit");
const servings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");

// have another step for creating the units
const units = ["cup", "gram", "ounce", "teaspoon"];

// have step to create the updateResultsList function
const updateResultsList = () => {
  resultList.innerHTML = "";

  units.forEach((newUnit) => {
    if (newUnit !== unit.value) {
      const convertedQuantity = processIngredient(
        parseFloat(quantity.value),
        unit.value,
        newUnit,
        parseFloat(servings.value)
      );

      resultList.innerHTML += `<li>${ingredient.value}: ${convertedQuantity} ${newUnit}</li>`;
    }
  });
};

// have step to add the event listener and call updateResultsList

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  updateResultsList();
});

// maybe final step could be to have them test it out in the UI by converting ingredients
