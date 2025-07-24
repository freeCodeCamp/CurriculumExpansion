const cardDisplay = document.querySelector("#current-card"); 
let currentCardIndex = -1;  
let showingFront = true; 
let currentCards: FlashCard[] = []; 

interface FlashCard
{
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

function refresh() {
  if (showingFront) {
    cardDisplay.textContent = currentCards[currentCardIndex].backText;
  } else {
    cardDisplay.textContent = currentCards[currentCardIndex].frontText;
  }
}

function flipCard() {
  showingFront = !showingFront;
  refresh();
}

function deleteCard() {
  const cardGrid = document.getElementById("card-grid");
  if (currentCards.length > 1) {
    currentCards.pop();
    const currentChild = cardGrid.children[currentCards.length - 1]; 
    cardGrid.removeChild(currentChild); 
    currentCardIndex = currentCards.length - 1;
  } else {
    alert("No cards to delete");
  }
  refresh();
}

function uploadNewCard() {
  const frontText = (
    document.getElementById("front-text") as HTMLInputElement
  ).value.trim();
  const backText = (
    document.getElementById("back-text") as HTMLInputElement
  ).value.trim();
  const errorElement = document.getElementById("entry-error");
  errorElement.textContent = ""; // Removing any existing error messages
  try {
    if (frontText == "") {
      throw new InvalidUserInputError("No front text provided");
    }

    if (backText == "") {
      throw new InvalidUserInputError("No back text provided");
    }

    const newCard: FlashCard = { frontText: frontText, backText: backText };
    currentCards.push(newCard);
    currentCardIndex++;
    refresh();

    const cardGrid = document.getElementById("card-grid");

    const newButton: HTMLButtonElement = document.createElement("button");
    newButton.innerText = frontText.substring(0, frontText.indexOf(" "));
    newButton.value = currentCardIndex.toString();
    newButton.onclick = function (e) {
      const target = e.target as HTMLButtonElement;
      currentCardIndex = parseInt(target.value);
    };
    cardGrid.appendChild(newButton);
  } catch (ex) {
    console.log(typeof ex); 
    if (ex instanceof InvalidUserInputError) {
      errorElement.textContent = "UserInputError:" + ex.message;
    }
  }
}

document.addEventListener("keydown", (ev: KeyboardEvent) => {
  if (ev.key === "Enter") {
    flipCard();
  }
}); 

document.addEventListener("DOMContentLoaded", () => {
  (document.getElementById("front-text") as HTMLInputElement).value = "Sample front";
  (document.getElementById("back-text") as HTMLInputElement).value = "Sample back";
  uploadNewCard();
  (document.getElementById("front-text") as HTMLInputElement).value = ""; 
  (document.getElementById("back-text") as HTMLInputElement).value = "";
});
