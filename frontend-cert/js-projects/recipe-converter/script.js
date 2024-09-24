// Curried function to convert quantity based on unit
const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionTable = {
    cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
    gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
    ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
    teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
  };

  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
};

// Curried function to adjust quantity based on servings
const adjustForServings = (baseQuantity) => (newServings) =>
  (baseQuantity / 1) * newServings;

// Function to compose conversion and adjustment
const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};

// Event listener for form submission
document.getElementById("recipe-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const ingredient = document.getElementById("ingredient").value;
  const quantity = parseFloat(document.getElementById("quantity").value);
  const unit = document.getElementById("unit").value;
  const servings = parseFloat(document.getElementById("servings").value);

  const units = ["cup", "gram", "ounce", "teaspoon"];
  const resultList = document.getElementById("result-list");
  resultList.innerHTML = "";

  units.forEach((newUnit) => {
    if (newUnit !== unit) {
      const convertedQuantity = processIngredient(
        quantity,
        unit,
        newUnit,
        servings
      );
      const listItem = document.createElement("li");
      listItem.textContent = `${ingredient}: ${convertedQuantity} ${newUnit}`;
      resultList.appendChild(listItem);
    }
  });
});
