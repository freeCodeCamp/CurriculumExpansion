const cardDisplay = document.querySelector<HTMLElement>("#current-card");
const cardButtonsContainer = document.getElementById<HTMLElement>(
  "cards-list",
);

const frontInput = document.getElementById<HTMLTextAreaElement>("front-text");
const backInput = document.getElementById<HTMLTextAreaElement>("back-text");

let currentCardIndex = -1;
let showingFront = true;
let currentCards: FlashCard[] = [];

interface FlashCard {
  frontText: string;
  backText: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
    Object.setPrototypeOf(this, InvalidUserInputError.prototype);
  }
}

function refresh(): void {
  if (currentCardIndex < 0 || !currentCards[currentCardIndex]) {
    cardDisplay.textContent =
      "No card selected. Add a new card to get started!";
    return;
  }

  const card = currentCards[currentCardIndex];
  cardDisplay.querySelector(".card-front").textContent = card.frontText;
  cardDisplay.querySelector(".card-back").textContent = card.backText;
  // add correct background to current card
  Array.from(cardButtonsContainer.children).forEach((child, i) => {
    const button = child as HTMLElement;
    if (i === currentCardIndex) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

function flipCard(): void {
  if (currentCardIndex === -1) return;
  showingFront = !showingFront;
  refresh();
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
    (child as HTMLButtonElement).onclick = () => {
      currentCardIndex = i;
      showingFront = true;
      refresh();
    };
  });

  if (currentCards.length === 0) {
    currentCardIndex = -1;
  } else {
    currentCardIndex = Math.min(Math.max(0, currentCardIndex - 1), cardButtonsContainer.children.length - 1); 
  }

  refresh();
}

function createCardButton(frontText: string, index: number): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.innerText =
    frontText.length > 20 ? frontText.slice(0, 20) + "..." : frontText;
  btn.onclick = () => {
    currentCardIndex = index;
    showingFront = true;
    refresh();
  };
  return btn;
}

function uploadNewCard(): void {
  const errorElement = document.getElementById<HTMLParagraphElement>(
    "entry-error",
  );

  const frontText = frontInput.value.trim();
  const backText = backInput.value.trim();
  errorElement.textContent = "";

  try {
    if (!frontText)
      throw new InvalidUserInputError("Front text cannot be empty.");
    if (!backText)
      throw new InvalidUserInputError("Back text cannot be empty.");

    const newCard: FlashCard = { frontText, backText };
    currentCards.push(newCard);
    const newIndex = currentCards.length - 1;
    const cardBtn = createCardButton(frontText, newIndex);
    cardButtonsContainer.appendChild(cardBtn);

    currentCardIndex = newIndex;
    showingFront = true;
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

document.addEventListener("keydown", (ev: KeyboardEvent) => {
  const frontInput = document.getElementById<HTMLTextAreaElement>(
    "front-text",
  );
  const backInput = document.getElementById<HTMLTextAreaElement>("back-text");
  if (
    ev.key === "Enter" &&
    document.activeElement !== frontInput &&
    document.activeElement !== backInput
  ) {
    ev.preventDefault();
    flipCard();
  }
});

interface Flashcard {
  question: string;
  answer: string;
  isAnswered?: boolean;
  isCorrect?: boolean;
}

interface CardDeck {
  name: string;
  cards: Flashcard[];
}

interface GameState {
  currentCardIndex: number;
  isFlipped: boolean;
  correctCount: number;
  wrongCount: number;
  gameStarted: boolean;
  gameCompleted: boolean;
  currentDeck: Flashcard[];
}

const cardDecks: Record<string, CardDeck> = {
  general: {
    name: "General Knowledge",
    cards: [
      { question: "What is the capital of France?", answer: "Paris" },
      { question: "Which planet is known as the Red Planet?", answer: "Mars" },
      {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
      },
      { question: "In which year did the Titanic sink?", answer: "1912" },
    ],
  },
};

// better to add a game class to encapsulate the game logic
// This will help in managing the game state, current card, and user interactions.
// This class can also handle the game flow, such as starting a new game, flipping cards
// and checking answers, making the code more organized and maintainable.
class FlashcardGame {
  state: GameState;
  private elements: {
    flashcard: HTMLElement;
    cardsList: HTMLElement;
    flipBtn: HTMLElement;
  };

  constructor() {
    this.state = {
      currentCardIndex: 0,
      isFlipped: false,
      correctCount: 0,
      wrongCount: 0,
      gameStarted: false,
      gameCompleted: false,
      currentDeck: [...cardDecks.general.cards],
    };

    this.elements = {
      flashcard: document.querySelector(".flashcard"),
      cardsList: document.getElementById("cards-list"),
      flipBtn: document.getElementById("flip-btn"),
    };

    if (this.elements.flashcard === null || this.elements.cardsList === null || this.elements.flipBtn === null)
    {
      const newErrorElement = document.createElement("p"); 
      newErrorElement.textContent = "DOM failed to hydrate, refresh the page";
      document.body.appendChild(newErrorElement); 
    }

 
    this.initializeEventListeners();
  }
  // Initialize the game by setting up the flashcard and event listeners
  private initializeEventListeners(): void {
    this.elements.flipBtn.addEventListener("click", () => this.flipCard());
  }
  private flipCard(): void {
    this.elements.flashcard.classList.toggle("flipped");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const game = new FlashcardGame();
  frontInput.value = game.state.currentDeck[0].question;
  backInput.value = game.state.currentDeck[0].answer;
  uploadNewCard();
});
