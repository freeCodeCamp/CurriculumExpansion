interface Card {
  name: string;
  value: string | number;
  name_short: string;
  value_int: number;
  suit: string;
  type: string;
  img: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

interface Deck {
  cards: Card[];
}

const IMG_URL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";

// Utility to safely select DOM elements
const getElement = <T extends HTMLElement>(selector: string): T => {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el as T;
};

// Utility functions
const hideElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.add("hidden"));

const showElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.remove("hidden"));

const getRandomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const renderCard = (
  drawingType: string,
  isReversed: boolean,
  shortName: string,
  img: string,
): string => `
  <div>
    <h2>${drawingType}</h2>
    <div class="card_container ${isReversed ? "reversed-card" : ""}" 
         data-id="${shortName}" 
         style="background-image: url(${IMG_URL}/${img})">
    </div>
  </div>
`;

enum DrawingType {
  Past = "past",
  Present = "present",
  Future = "future",
}

// Element references
const singleCardBtn = getElement<HTMLElement>("#btn-single-card");
const singleCard = getElement<HTMLElement>(".single_card");
const multipleCardsBtn = getElement<HTMLElement>("#btn-multiple-cards");
const multipleCard = getElement<HTMLElement>(".multiple_card");
const fortuneContainer = getElement<HTMLElement>(".fortune_container");
const fortuneDescription = getElement<HTMLElement>(".fortune_description");
const newReadingBtn = getElement<HTMLElement>(".btn_reveal");

const title = getElement<HTMLElement>(".title");
const headerTitle = getElement<HTMLElement>(".header_title");
const subTitle = getElement<HTMLElement>(".sub_title");
const cardTitle = getElement<HTMLElement>(".desc_title");
const description = getElement<HTMLElement>(".description");
const text = getElement<HTMLElement>(".text");

// Game class
class Game {
  cards: Card[] = [];

  constructor() {
    this.fetchCardsData();
  }

  async fetchCardsData() {
    try {
      const response = await fetch(
        "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app/card_data.json",
      );
      const data: Deck = await response.json();
      this.cards = data.cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  singleCardSelected() {
    hideElements(
      singleCardBtn,
      multipleCardsBtn,
      multipleCard,
      text,
      headerTitle,
    );

    const isReversed = Math.random() < 0.5;
    const chosenCard = getRandomItem(this.cards);

    singleCard.innerHTML = renderCard(
      "Your card",
      isReversed,
      chosenCard.name_short,
      chosenCard.img,
    );
    multipleCard.innerHTML = "";

    showElements(singleCard, fortuneContainer);
  }

  multipleCardSelected() {
    hideElements(singleCard, singleCardBtn, multipleCardsBtn, headerTitle);
    showElements(multipleCard, fortuneContainer, text);

    multipleCard.innerHTML = Object.values(DrawingType)
      .map((type) => {
        const isReversed = Math.random() < 0.5;
        const card = getRandomItem(this.cards);
        return renderCard(type, isReversed, card.name_short, card.img);
      })
      .join("");
  }

  showFortune(e: Event) {
    const target = e.target as HTMLElement | null;
    const cardElement = target?.closest(
      ".card_container",
    ) as HTMLElement | null;

    if (!cardElement) return;

    const cardId = cardElement.getAttribute("data-id");
    const foundCard = this.cards.find((card) => card.name_short === cardId);

    if (foundCard) {
      cardTitle.textContent = foundCard.name;
      description.textContent = foundCard.desc;
      subTitle.textContent = foundCard.meaning_up;
      title.textContent = foundCard.name;
      showElements(fortuneDescription);
    }
  }

  newReading() {
    showElements(singleCardBtn, multipleCardsBtn, headerTitle);
    hideElements(
      singleCard,
      multipleCard,
      fortuneContainer,
      fortuneDescription,
    );
  }
}

const game = new Game();

// Event listeners
singleCardBtn.addEventListener("click", () => game.singleCardSelected());
multipleCardsBtn.addEventListener("click", () => game.multipleCardSelected());
newReadingBtn.addEventListener("click", () => game.newReading());
document.addEventListener("click", (e: Event) => game.showFortune(e));
