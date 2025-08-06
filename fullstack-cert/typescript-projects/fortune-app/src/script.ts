
interface Card
{
  name: string; 
  value: number; 
}

interface Deck
{
  cards: Card[]; 
}

const singleCardBtn = document.getElementById("btn-single-card") as HTMLButtonElement;
const multipleCardsBtn = document.getElementById("btn-multiple-cards") as HTMLButtonElement;
const fortuneContainer = document.getElementsByClassName("fortune_container")[0] as HTMLElement;
const multiple_card = document.getElementsByClassName("multiple_card")[0] as HTMLElement;
const singleCard = document.getElementsByClassName("single_card")[0] as HTMLElement;
const newReadingBtn = document.getElementsByClassName("btn_reveal")[0] as HTMLButtonElement;
const apiURL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";

const dataUrl = apiURL + "/card_data.json"; 

const text = document.querySelector(".text") as HTMLElement;

let cardData: Deck = {cards: []}; 

document.addEventListener("DOMContentLoaded", async function () {
  // This is the logic for where the card is fetched and parsed
  const response = await fetch(dataUrl); 
  cardData = await response.json(); 
}); 

const HideElement = (...element:HTMLElement[]) => {
element.forEach(el => {
    el.classList.add("hidden")
})
}

const cardTemplate = function (drawingType: string, cardName: string, value: number, isReversed : boolean) {
  return `
 <div>
    <h2>${drawingType}</h2>
    <div class="card_container ">
        <div class="card_front ${isReversed ? 'reversed-card' : ""}"> 
            <span>${value}</span>
            <span>${cardName}</span>
            ${isReversed ? "<span>Reversed</span>" : ""}
        </div>
    </div>
    </div>
  `;
};

const ShowElement = (...element:HTMLElement[]) =>{
    element.forEach(el => {
        el.classList.remove("hidden")
    })
}
// reveal card for single card
singleCardBtn.addEventListener("click", (e:Event) =>{ 
  HideElement(singleCardBtn, multipleCardsBtn, multiple_card, text);
  const isReversed = Math.round(Math.random()) + 1 === 1; 
  let chosenCardIndex = Math.round(Math.random() * cardData.cards.length - 1);
  console.log(chosenCardIndex); 
      let chosenCard = cardData.cards[chosenCardIndex]; 

  ShowElement(singleCard, fortuneContainer); 
    singleCard.innerHTML = cardTemplate(
      "Your card",
      chosenCard.name,
      chosenCard.value,
      isReversed
    );
    multiple_card.innerHTML = "";
})


// reveal card for multiple 
multipleCardsBtn.addEventListener("click", (e: Event) => {
  ShowElement(multiple_card, fortuneContainer, text)
  HideElement(singleCard, singleCardBtn, multipleCardsBtn)

  /// i am just adding to test how to multiple card look like we will change this later 
  const cards = ["past", "future", "present"];

  const MultipleCards = `
  ${cards.map(itm => {
    // 1 for front, 2 for reversed
    const isReversed = (Math.round(Math.random()) + 1) === 1;
    let chosenCardIndex = Math.round(Math.random() * cardData.cards.length - 1); 
    let chosenCard = cardData.cards[chosenCardIndex]; 
    return cardTemplate(itm, chosenCard.name, chosenCard.value, isReversed);
  }).join('')}`

  multiple_card.innerHTML = MultipleCards

});


// new Reading button to just clear the reveal card
newReadingBtn.addEventListener("click", (e:Event) =>{ 
 ShowElement( singleCardBtn ,multipleCardsBtn)
    HideElement(singleCard, multiple_card, fortuneContainer)

})


