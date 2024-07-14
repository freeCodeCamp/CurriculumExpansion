// have campers add the first 3 objects, then add the rest
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

// build out function in pieces
// first start with return filtered arr. have them test it with console statements
// then chain map and have them test
// then chain join and have them test

function instrumentCards(instrumentCategory) {
  // have a step just to return instruments
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  return instruments
    .map(({ instrument, price }) => {
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    .join("");
}

selectContainer.addEventListener("change", () => {
  // have campers add this test just to make sure the change event is working
  // console.log("this is a test");

  // have them test just getting the value
  // console.log(selectContainer.value);

  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
