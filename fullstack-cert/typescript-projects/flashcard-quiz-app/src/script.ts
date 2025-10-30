const cardDisplay = document.querySelector<HTMLElement>("#current-card");
const cardButtonsContainer = document.querySelector<HTMLElement>("#cards-list");
const frontInput = document.querySelector<HTMLTextAreaElement>("#front-text");
const backInput = document.querySelector<HTMLTextAreaElement>("#back-text");

let currentCardIndex = -1;
let currentCards: FlashCard[] = [
  { questionText: "What is the capital of France?", answerText: "Paris" },
  { questionText: "Which planet is known as the Red Planet?", answerText: "Mars" },
  {
    questionText: "What is the largest mammal in the world?",
    answerText: "Blue whale",
  },
  { questionText: "In which year did the Titanic sink?", answerText: "1912" },
];

interface FlashCard {
  questionText: string;
  answerText: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
    Object.setPrototypeOf(this, InvalidUserInputError.prototype);
  }
}

const isButtonElement = (element: unknown): element is HTMLButtonElement => {
  return element instanceof HTMLButtonElement;
};

function refresh(): void {
  if (currentCardIndex < 0 || !currentCards[currentCardIndex]) {
    cardDisplay.textContent =
      "No card selected. Add a new card to get started!";
    return;
  }

  const card = currentCards[currentCardIndex];
  cardDisplay.querySelector(".card-front").textContent = card.questionText;
  cardDisplay.querySelector(".card-back").textContent = card.answerText;
  // add correct background to current card
  Array.from(cardButtonsContainer.children).forEach((child, i) => {
    if (!isButtonElement(child)) {
      console.warn(`Element {${child}} is not a button.`);
      return;
    }
    if (i === currentCardIndex) {
      child.classList.add("selected");
    } else {
      child.classList.remove("selected");
    }
  });
}

function deleteCard(): void {
  if (currentCardIndex === -1) {
    console.log("No card selected to delete.");
    return;
  }

  currentCards.splice(currentCardIndex, 1);
  cardButtonsContainer.removeChild(
    cardButtonsContainer.children[currentCardIndex],
  );

  Array.from(cardButtonsContainer.children).forEach((child, i) => {
    if (!isButtonElement(child)) {
      console.warn(`Element {${child}} is not a button.`);
      return;
    }

    child.onclick = () => {
      currentCardIndex = i;
      refresh();
    };
  });

  if (currentCards.length === 0) {
    currentCardIndex = -1;
  } else {
    currentCardIndex = Math.min(
      Math.max(0, currentCardIndex - 1),
      cardButtonsContainer.children.length - 1,
    );
  }

  refresh();
}

function createCardButton(questionText: string, index: number): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.innerText =
    questionText.length > 20 ? questionText.slice(0, 20) + "..." : questionText;
  btn.onclick = () => {
    currentCardIndex = index;
    refresh();
  };
  return btn;
}

function uploadNewCard(): void {
  const errorElement =
    document.querySelector<HTMLParagraphElement>("#entry-error");

  const questionText = frontInput.value.trim();
  const answerText = backInput.value.trim();
  errorElement.textContent = "";

  try {
    if (!questionText)
      throw new InvalidUserInputError("Front text cannot be empty.");
    if (!answerText)
      throw new InvalidUserInputError("Back text cannot be empty.");

    const newCard: FlashCard = { questionText, answerText };
    currentCards.push(newCard);
    const newIndex = currentCards.length - 1;
    const cardBtn = createCardButton(questionText, newIndex);
    cardButtonsContainer.appendChild(cardBtn);

    currentCardIndex = newIndex;
    refresh();

    frontInput.value = "";
    backInput.value = "";
  } catch (ex) {
    if (ex instanceof InvalidUserInputError) {
      errorElement.textContent = "⚠️ " + ex.message;
    } else {
      console.error("An unexpected error occurred:", ex);
    }
  }
}

// better to add a game class to encapsulate the game logic
// This will help in managing the game state, current card, and user interactions.
// This class can also handle the game flow, such as starting a new game, flipping cards
// and checking answers, making the code more organized and maintainable.
class FlashCardController {
  private elements: {
    flashcard: HTMLElement;
    cardsList: HTMLElement;
    flipBtn: HTMLElement;
    entryForm: HTMLFormElement;
    deleteBtn: HTMLButtonElement;
  };

  constructor() {
    this.elements = {
      flashcard: document.querySelector(".flashcard"),
      cardsList: document.querySelector("#cards-list"),
      flipBtn: document.querySelector("#flip-btn"),
      entryForm: document.querySelector(".entry-form"),
      deleteBtn: document.querySelector("#delete-btn"),
    };

    if (
      this.elements.flashcard === null ||
      this.elements.cardsList === null ||
      this.elements.flipBtn === null ||
      this.elements.entryForm === null ||
      this.elements.deleteBtn === null
    ) {
      const newErrorElement = document.createElement("p");
      newErrorElement.textContent = "DOM failed to hydrate, refresh the page";
      document.body.appendChild(newErrorElement);
    }

    this.initializeEventListeners();
  }
  // Initialize the game by setting up the flashcard and event listeners
  private initializeEventListeners(): void {
    this.elements.flipBtn.addEventListener("click", () => this.flipCard());
    
    // Add form submit event listener
    this.elements.entryForm.addEventListener("submit", (ev: SubmitEvent) => {
      ev.preventDefault();
      uploadNewCard();
    });

    // Add delete button event listener
    this.elements.deleteBtn.addEventListener("click", () => deleteCard());
  }
  // flips the `card` and shows the hidden side
  private flipCard(): void {
    this.elements.flashcard.classList.toggle("flipped");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // TODO: add cards from array at start 
});
