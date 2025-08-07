const cardDisplay = document.querySelector("#current-card") as HTMLElement;
const cardGrid = document.getElementById("card-grid") as HTMLElement;
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
    cardDisplay.textContent = "No card selected";
    return;
  }

  const card = currentCards[currentCardIndex];
  cardDisplay.textContent = showingFront ? card.frontText : card.backText;

 // Visual highlight
  Array.from(cardGrid.children).forEach((child, i) => {
    (child as HTMLElement).style.border = i === currentCardIndex
      ? "2px solid hotpink"
      : "2px solid transparent";
  });
}

function flipCard(): void {
  if (currentCardIndex === -1) return;
  showingFront = !showingFront;
  refresh();
}

function deleteCard(): void {
  if (currentCardIndex === -1) return alert("No cards to delete");

  currentCards.splice(currentCardIndex, 1);
  cardGrid.removeChild(cardGrid.children[currentCardIndex]);

  Array.from(cardGrid.children).forEach((child, i) => {
    (child as HTMLButtonElement).onclick = () => {
      currentCardIndex = i;
      showingFront = true;
      refresh();
    };
  });

  // Adjust index
  if (currentCards.length === 0) {
    currentCardIndex = -1;
  } else {
    currentCardIndex = Math.max(0, currentCardIndex - 1);
  }

  refresh();
}

function createCardButton(frontText: string, index: number): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.className = "mini-card";
  btn.innerText = frontText.length > 10 ? frontText.slice(0, 10) + "..." : frontText;
  btn.onclick = () => {
    currentCardIndex = index;
    showingFront = true;
    refresh();
  };
  return btn;
}

function uploadNewCard(): void {
  const frontInput = document.getElementById("front-text") as HTMLInputElement;
  const backInput = document.getElementById("back-text") as HTMLInputElement;
  const errorElement = document.getElementById("entry-error");

  const frontText = frontInput.value.trim();
  const backText = backInput.value.trim();
  errorElement.textContent = "";

  try {
    if (!frontText) throw new InvalidUserInputError("Front text is empty");
    if (!backText) throw new InvalidUserInputError("Back text is empty");

    const newCard: FlashCard = { frontText, backText };
    currentCards.push(newCard);
    const newIndex = currentCards.length - 1;
    const cardBtn = createCardButton(frontText, newIndex);
    cardGrid.appendChild(cardBtn);

    currentCardIndex = newIndex;
    showingFront = true;
    refresh();

    frontInput.value = "";
    backInput.value = "";
  } catch (ex) {
    if (ex instanceof InvalidUserInputError) {
      errorElement.textContent = "⚠️ " + ex.message;
    } else {
      console.error("Unexpected error:", ex);
    }
  }
}

document.addEventListener("keydown", (ev: KeyboardEvent) => {
  if (ev.key === "Enter") {
    ev.preventDefault(); 
    flipCard();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const frontInput = document.getElementById("front-text") as HTMLInputElement;
  const backInput = document.getElementById("back-text") as HTMLInputElement;

  frontInput.value = "What is HTML?";
  backInput.value = "A markup language for structuring web content.";
  uploadNewCard();
});
