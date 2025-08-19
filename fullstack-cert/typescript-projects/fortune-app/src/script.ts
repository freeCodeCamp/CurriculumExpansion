/**
 * Tarot Fortune App (TypeScript)
 * - Fetches tarot card data and renders single or multi-card readings
 * - Handles UI interactions and updates the fortune description panel
 * - Keeps DOM access centralized and minimal for clarity and safety
 */
//import defaultImg from "bundle-text:./default.svg";
const defaultImg = new URL("default.svg", import.meta.url);
/** Shape of a tarot card returned by the remote dataset */
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

/** Deck is the root object returned by the API */
interface Deck {
  cards: Card[];
}

/** Base URL for remote images (PNG); used when cards provide an image path */
const CDN_URL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";

/** Utility to safely select DOM elements; throws if selector is missing */
const getElement = <T extends HTMLElement>(selector: string): T => {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el as T;
};

/** Utility: hide any number of elements by adding the hidden class */
const hideElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.add("hidden"));

/** Utility: show any number of elements by removing the hidden class */
const showElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.remove("hidden"));

/** Utility: pick a random item from a non-empty array */
const getRandomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

/** Local fallback image for cards that fail to load a remote image */
const LOCAL_DEFAULT_IMG = defaultImg; // Place default.svg in your public or assets folder

/**
 * Render a single card block with a loader, image, and error fallback.
 * - Uses onload to hide the loader once the image is ready
 * - Uses onerror to retry once with a local default image
 */
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
        src="${img ? `${CDN_URL}/${img}` : LOCAL_DEFAULT_IMG}"
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

/** Types of card positions when drawing multiple cards */
enum DrawingType {
  Past = "past",
  Present = "present",
  Future = "future",
}

/**
 * Game
 * - Holds card data, DOM references, event bindings, and UI transitions
 */
class Game {
  cards: Card[] = [];
  /** Cache all relevant DOM elements up front */
  private elements: {
    singleCardBtn: HTMLElement;
    singleCard: HTMLElement;
    multipleCardsBtn: HTMLElement;
    multipleCard: HTMLElement;
    title: HTMLElement;
    newReadingBtn: HTMLElement;
    fortuneContainer: HTMLElement;
    fortuneDescription: HTMLElement;
    headerTitle: HTMLElement;
    subTitle: HTMLElement;
    cardTitle: HTMLElement;
    description: HTMLElement;
    text: HTMLElement;
  };

  constructor() {
    // 1) Cache DOM elements
    this.elements = {
      singleCardBtn: getElement("#btn-single-card")!,
      singleCard: getElement(".single_card")!,
      multipleCardsBtn: getElement("#btn-multiple-cards")!,
      multipleCard: getElement(".multiple_card")!,
      title: getElement(".title")!,
      newReadingBtn: getElement(".btn_reveal")!,
      fortuneContainer: getElement(".fortune_container")!,
      fortuneDescription: getElement(".fortune_description")!,
      headerTitle: getElement(".header_title")!,
      subTitle: getElement(".sub_title")!,
      cardTitle: getElement(".desc_title")!,
      description: getElement(".description")!,
      text: getElement(".text")!,
    };
    // 2) Fetch data
    this.fetchCardsData();
    // 3) Bind events
    //    (kept separate for readability and easier testing)
    this.initializeEventListeners();
  }

  /**
   * Fetch and store tarot card data from the remote JSON.
   * Logs an error to the console if the request fails.
   */
  private async fetchCardsData() {
    try {
      const response = await fetch(`${CDN_URL}/card_data.json`);
      const data: Deck = await response.json();
      this.cards = data.cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  /** Bind all UI event listeners used by the app */
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

  /**
   * Show a single randomly selected card.
   * Hides the initial buttons and reveals the single-card view.
   */
  singleCardSelected() {
    hideElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.multipleCard,
      this.elements.text,
      this.elements.headerTitle,
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

  /**
   * Show three cards (past, present, future).
   * Hides the single-card elements and reveals the multi-card view.
   */
  multipleCardSelected() {
    hideElements(
      this.elements.singleCard,
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.headerTitle,
    );
    showElements(
      this.elements.multipleCard,
      this.elements.fortuneContainer,
      this.elements.text,
    );

    this.elements.multipleCard.innerHTML = Object.values(DrawingType)
      .map((type) => {
        const isReversed = Math.random() < 0.5;
        const card = getRandomItem(this.cards);
        return renderCard(type, isReversed, card.name_short, card.img);
      })
      .join("");
  }

  /**
   * Populate the fortune description panel when a card is clicked.
   * Uses the card's data-id attribute to locate the matching card data.
   */
  showFortune(e: Event) {
    const target = e.target as HTMLElement | null;
    const cardElement = target?.closest(
      ".card_container",
    ) as HTMLElement | null;

    if (!cardElement) return;

    const cardId = cardElement.getAttribute("data-id");
    const foundCard = this.cards.find((card) => card.name_short === cardId);

    if (foundCard) {
      this.elements.cardTitle.textContent = foundCard.name;
      this.elements.description.textContent = foundCard.desc;
      this.elements.subTitle.textContent = foundCard.meaning_up;
      this.elements.title.textContent = foundCard.name;
      showElements(this.elements.fortuneDescription);
    }
  }

  /** Reset the UI so users can start a new reading */
  newReading() {
    showElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.headerTitle,
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
