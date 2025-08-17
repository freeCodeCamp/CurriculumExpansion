//import defaultImg from "bundle-text:./default.svg";
const defaultImg = new URL("default.svg", import.meta.url);
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

const LOCAL_DEFAULT_IMG = defaultImg; // Place default.svg in your public or assets folder

const renderCard = (
  drawingType: string,
  isReversed: boolean,
  shortName: string,
  img: string,
): string =>
  `
  <div>
    <h2>${drawingType}</h2>
    <div class="card_container ${isReversed ? "reversed-card" : ""}" data-id="${shortName}">
      <div class="img-loader"></div>
      <img 
        src="${img ? `${IMG_URL}/${img}` : LOCAL_DEFAULT_IMG}"
        class="card-img hidden"
        onload="this.classList.remove('hidden');this.previousElementSibling.style.display='none';"
        onerror="
          if (!this.dataset.failed) {
            this.dataset.failed = '1';
            this.src='${LOCAL_DEFAULT_IMG}';
          } else {
            this.classList.remove('hidden');
            this.previousElementSibling.style.display='none';
          }
        "
      />
    </div>
  </div>
`;

enum DrawingType {
  Past = "past",
  Present = "present",
  Future = "future",
}

// Element references

const title = getElement<HTMLElement>(".title");
const headerTitle = getElement<HTMLElement>(".header_title");
const subTitle = getElement<HTMLElement>(".sub_title");
const cardTitle = getElement<HTMLElement>(".desc_title");
const description = getElement<HTMLElement>(".description");
const text = getElement<HTMLElement>(".text");

// Game class
class Game {
  cards: Card[] = [];
  private elements: {
    singleCardBtn: HTMLElement;
    singleCard: HTMLElement;
    multipleCardsBtn: HTMLElement;
    multipleCard: HTMLElement;
    title: HTMLElement;
    newReadingBtn: HTMLElement;
    fortuneContainer: HTMLElement;
    fortuneDescription: HTMLElement;
  };

  constructor() {
    this.elements = {
      singleCardBtn: getElement("#btn-single-card")!,
      singleCard: getElement(".single_card")!,
      multipleCardsBtn: getElement("#btn-multiple-cards")!,
      multipleCard: getElement(".multiple_card")!,
      title: getElement(".title")!,
      newReadingBtn: getElement(".btn_reveal"),
      fortuneContainer: getElement(".fortune_container"),
      fortuneDescription: getElement(".fortune_description"),
    };
    this.fetchCardsData();
    this.initializeEventListeners();
  }

  private async fetchCardsData() {
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

  private initializeEventListeners(): void {
    // Event listeners
    this.elements.singleCardBtn.addEventListener("click", () =>
      this.singleCardSelected(),
    );
    this.elements.multipleCardsBtn.addEventListener("click", () =>
      this.multipleCardSelected(),
    );
    this.elements.newReadingBtn.addEventListener("click", () =>
      this.newReading(),
    );
    document.addEventListener("click", (e: Event) => this.showFortune(e));
  }

  singleCardSelected() {
    hideElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.multipleCard,
      text,
      headerTitle,
    );

    const isReversed = Math.random() < 0.5;
    const chosenCard = getRandomItem(this.cards);

    this.elements.singleCard.innerHTML = renderCard(
      "Your card",
      isReversed,
      chosenCard.name_short,
      chosenCard.img,
    );
    this.elements.multipleCard.innerHTML = "";

    showElements(this.elements.singleCard, this.elements.fortuneContainer);
  }

  multipleCardSelected() {
    hideElements(
      this.elements.singleCard,
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      headerTitle,
    );
    showElements(
      this.elements.multipleCard,
      this.elements.fortuneContainer,
      text,
    );

    this.elements.multipleCard.innerHTML = Object.values(DrawingType)
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
      showElements(this.elements.fortuneDescription);
    }
  }

  newReading() {
    showElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      headerTitle,
    );
    hideElements(
      this.elements.singleCard,
      this.elements.multipleCard,
      this.elements.fortuneContainer,
      this.elements.fortuneDescription,
    );
  }
}

const game = new Game();
