/**
 * TODO: Fetch data from external source
 * Card images should be hosted on CDN
 */

const singleCardBtn = document.getElementById("btn-single-card") as HTMLButtonElement;
const multipleCardsBtn = document.getElementById("btn-multiple-cards") as HTMLButtonElement;
const fortune_container = document.getElementsByClassName("fortune_container")[0] as HTMLElement 
const multiple_card = document.getElementsByClassName("multiple_card")[0] as HTMLElement
const singleCard = document.getElementsByClassName("single_card")[0] as HTMLElement 
const newReadingBtn = document.getElementsByClassName("btn_revil")[0] as HTMLButtonElement 
const text = document.querySelector(".text") as HTMLElement
console.log(singleCardBtn, multipleCardsBtn, singleCard) 



const HideElement = (...element:HTMLElement[]) => {
element.forEach(el => {
    el.classList.add("hidden")
})
}

const ShowElement = (...element:HTMLElement[]) =>{
    element.forEach(el => {
        el.classList.remove("hidden")
    })
}
// reail card for single card
singleCardBtn.addEventListener("click", (e:Event) =>{ 
       HideElement(singleCardBtn ,multipleCardsBtn,multiple_card,text)
    ShowElement(singleCard, fortune_container)
     multiple_card.innerHTML = "";
})


// revail card for muiltiple 
multipleCardsBtn.addEventListener("click", (e:Event) =>{ 
  ShowElement( multiple_card, fortune_container,text)
    HideElement(singleCard, singleCardBtn ,multipleCardsBtn)


/// i am just adding to test how to multipple card look like we will change this later 
const cards = ["past", "future", "present"];

const MultipleCards = `
  ${cards.map(itm => `
 <div>
    <h2>${itm}</h2>
    <div class="card_container">
        <div class="card_front"> 
            <span>16</span>
            <span>The Tower</span>
            <span>Reversed</span>
        </div>
    </div>
    </div>
  `).join('')}`

    multiple_card.innerHTML = MultipleCards

})


// new Reading button to just clear the revil card
newReadingBtn.addEventListener("click", (e:Event) =>{ 
 ShowElement( singleCardBtn ,multipleCardsBtn)
    HideElement(singleCard, multiple_card, fortune_container)

})


