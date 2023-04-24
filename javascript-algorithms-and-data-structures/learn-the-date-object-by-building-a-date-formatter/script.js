const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// first time date object is introduced

// I think we should add a step for campers to log the date to the console so they can see the results
// Then update the log call on each new variable declaration to see what their new values are
const date = new Date();
const day = date.getDate();
// start with a step that doesn't add one, let campers see that months
// are zero indexed.
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

// we can start by having campers format the date themselves then refactor later on
const formattedDate = `${day}-${month}-${year}`;

/**
 * 
 * Maybe towards the end of the project, we could have the campers refactor the formatted date to use
 * Intl.DateTimeFormat instead. 
 * 
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
 * 
 * const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
 * 
 */

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
// start with split and join, but a manual loop to reverse array?
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;

    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;

    default:
      currentDateParagraph.textContent = `${day}-${month}-${year}`;
      break;
  }
});
