// maybe have a step where querySelector is used and explain why it doesn't work to select all buttons
const btns = document.querySelectorAll(".emoji-btn");

// TODO: add logic for decrementing happy count when sad or angry button is clicked

// maybe have steps to initially add event listeners to each button separately?
// Then we can have camper refactor the code to this solution instead
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const countEl = btn.querySelector(".count");
    // maybe a good time to teach unary plus operator here? was brought up in lectures but
    // might be a good refresher
    console.log(btn.id);
    let currCount = +countEl.textContent;
    if (currCount === 10) return;

    currCount++;
    countEl.textContent = currCount;
  })
);
