const cardDisplay = document.querySelector("#current-card"); 
let currentCardIndex = 0; 
let showingFront = true; 

interface FlashCard
{
  frontText: string;
  backText: string;
}

let currentCards: FlashCard[] = []; 

document.getElementById("front-text").textContent = "Sample front";
document.getElementById("back-text").textContent = "Sample back";
uploadNewCard(); 


function refresh()
{
    if (showingFront) {
      cardDisplay.textContent = currentCards[currentCardIndex].backText;
    } else {
      cardDisplay.textContent = currentCards[currentCardIndex].frontText;
    }
}

function flipCard()
{
  showingFront = !showingFront;
  refresh(); 
}

function deleteCard()
{
  if (currentCards.length > 1)
  {
    currentCards.pop(); 
    currentCardIndex = currentCards.length - 1; 
  }
  else 
  {
    alert("No cards to delete"); 
  }
  refresh(); 
}



function uploadNewCard()
{
  const frontText = document.getElementById("front-text").textContent;
  const backText = document.getElementById("back-text").textContent; 
  const newCard: FlashCard = { frontText: frontText, backText: backText };
  currentCards.push(newCard); 
  currentCardIndex++; 
  refresh(); 

  const cardGrid = document.getElementById("card-grid");

  const newButton: HTMLButtonElement = new HTMLButtonElement(); 
  newButton.innerText = frontText.substring(0, frontText.indexOf(" ")); 
  newButton.value = currentCardIndex.toString(); 
  newButton.onclick = function (e)
  {
    const target = e.target as HTMLButtonElement; 
    currentCardIndex = parseInt(target.value); 
  }
  cardGrid.appendChild(newButton); 
}
