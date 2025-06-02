// maybe have a step where querySelector is used for the buttons
// and explain why it doesn't work to select all buttons
const btns = document.querySelectorAll(".emoji-btn");

function updateCount(btn) {
  // maybe have a step where they initially return just the btn. Then add a console.log
  // and try clicking on the different buttons to see the results?
  // return btn

  const countEl = btn.querySelector(".count");
  // maybe a good time to teach unary plus operator here? was brought up in lectures but
  // might be a good refresher

  // also maybe break this line up into multiple steps?
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount === 10) return;

  currCount++;

  countEl.textContent = `${currCount}/10`;
}

// maybe have steps to initially add event listeners to each button separately?
// Then we can have camper refactor the code to this solution instead
btns.forEach((btn) => btn.addEventListener("click", () => updateCount(btn)));
