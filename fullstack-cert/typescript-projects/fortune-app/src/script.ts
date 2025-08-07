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

const getElement = <T>(selector: string): T => {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el as T;
};

const singleCardBtn = getElement<HTMLElement>("#btn-single-card");
const multipleCardsBtn = getElement<HTMLElement>("#btn-multiple-cards");
const fortuneContainer = getElement<HTMLElement>(".fortune_container");
const fortune_description = getElement<HTMLElement>(".fortune_description");
const multiple_card = getElement<HTMLElement>(".multiple_card");
const singleCard = getElement<HTMLElement>(".single_card");
const newReadingBtn = getElement<HTMLElement>(".btn_reveal");
const title = getElement<HTMLElement>(".title")!;
const header_title = getElement<HTMLElement>(".header_title");
const sub_title = getElement<HTMLElement>(".sub_title");
const Cardtitle = getElement<HTMLElement>(".desc_title");
const description = getElement<HTMLElement>(".description");
const text = getElement<HTMLElement>(".text");

const apiURL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";

const dataUrl = apiURL + "/card_data.json";

const getRandomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length - 1);
  return items[index];
};

function isCard(obj: any): obj is Card {
  return (
    (typeof obj?.name === "string" &&
      typeof obj?.value === "string" &&
      typeof obj?.name_short === "string" &&
      typeof obj?.value_int === "number") ||
    (typeof obj.value_int === "string" &&
      typeof obj?.suit === "string" &&
      typeof obj?.type === "string" &&
      typeof obj?.img === "string" &&
      typeof obj?.meaning_up === "string" &&
      typeof obj?.meaning_rev === "string" &&
      typeof obj?.desc === "string")
  );
}

const isDeck = (data: any): data is Deck => {
  return Array.isArray(data.cards) && data.cards.every(isCard);
};

let cardData: Deck = { cards: [] };

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch(dataUrl);
    const RowData: unknown = await response.json();

    // check row data type
    if (isDeck(RowData)) {
      cardData = RowData;
    } else {
      throw new Error("Response data does not match expected Deck format");
    }
  } catch (err) {
    console.error(" Failed to load data:", err);
  }
});
class Game {
  cards: Card[];

  fetchCardsData() {
    return fetch(
      "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app/card_data.json",
    )
      .then((response) => response.json())
      .then((data: Deck) => {
        this.cards = data.cards; //populate cards member
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }

  constructor() {
    this.fetchCardsData();
  }

  showFortune(e) {
    //add here show fortune logic
  }

  singleCardSelected() {
    //add here the single card logic
  }

  multipleCardSelected() {
    //add here the multiple card logic
  }
}

const game = new Game();
// UTILS
const HideElement = (...element: HTMLElement[]) => {
  element.forEach((el) => {
    el.classList.add("hidden");
  });
};

const renderCard = function (
  drawingType: string,
  isReversed: boolean,
  shortName: string,
  img: string,
) {
  return `
 <div>
    <h2>${drawingType}</h2>
    <div class="card_container ${isReversed ? "reversed-card" : ""}" data-id=${shortName} style="background-image: url(${apiURL}/${img})">
        </div>
    </div>
  `;
};

const ShowElement = (...element: HTMLElement[]) => {
  element.forEach((el) => {
    el.classList.remove("hidden");
  });
};

// CLICK HANDLERS:
// reveal card for single card
singleCardBtn.addEventListener("click", (e: Event) => {
  HideElement(
    singleCardBtn,
    multipleCardsBtn,
    multiple_card,
    text,
    header_title,
  );
  const isReversed = Math.round(Math.random()) + 1 === 1;

  let chosenCard = getRandomItem(cardData.cards);

  ShowElement(singleCard, fortuneContainer);
  singleCard.innerHTML = renderCard(
    "Your card",
    isReversed,
    chosenCard.name_short,
    chosenCard.img,
  );
  multiple_card.innerHTML = "";
});

// reveal card for multiple
multipleCardsBtn.addEventListener("click", (e: Event) => {
  ShowElement(multiple_card, fortuneContainer, text);
  HideElement(singleCard, singleCardBtn, multipleCardsBtn, header_title);

  enum DrawingType {
    Past = "past",
    Present = "present",
    Future = "future",
  }
  const cards: DrawingType[] = [
    DrawingType.Past,
    DrawingType.Present,
    DrawingType.Future,
  ];

  const MultipleCards = `
  ${cards
    .map((itm) => {
      // 1 for front, 2 for reversed
      const isReversed = Math.round(Math.random()) + 1 === 1;

      let chosenCard = getRandomItem(cardData.cards);
      return renderCard(
        itm,
        isReversed,
        chosenCard.name_short,
        chosenCard.img,
      );
    })
    .join("")}`;

  multiple_card.innerHTML = MultipleCards;
});

// new Reading button to just clear the reveal card
newReadingBtn.addEventListener("click", (e: Event) => {
  ShowElement(singleCardBtn, multipleCardsBtn, header_title);
  HideElement(singleCard, multiple_card, fortuneContainer, fortune_description);
});

document.addEventListener("click", (e: Event) => {
  const target = e.target;

  if (!(target instanceof HTMLElement)) return;

  const cardElement = target.closest(".card_container");

  if (!(cardElement instanceof HTMLElement)) return;

  if (cardElement) {
    const cardId = cardElement.getAttribute("data-id");
    const FindElement = cardData.cards.find((el) => el.name_short == cardId);

    if (FindElement) {
      description.textContent = FindElement.desc;
      Cardtitle.textContent = FindElement.name;
      sub_title.textContent = FindElement.meaning_up;
      title.textContent = FindElement.name;
    }
    ShowElement(fortune_description);
  }
});
