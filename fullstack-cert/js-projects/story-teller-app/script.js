// start with practicing querySelector()
const storyContainer = document.querySelector(".story-container");

// practice working with getElementById()
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
const result = document.getElementById("result");

// have them create an object of stories

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin.
        They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#EE4B2B",
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire.
        However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32",
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple.
        They braved deadly traps and encountered strange wildlife,
        all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157",
  },
};

/**
 *
 * First have them create a function
 * with just a console statement
 * so they can test the event listener
 * 
function displayStory() {
    console.log("You clicked the button");
}

scaryStoryBtn.addEventListener("click", displayStory);
 *
 */

// then write steps to have them remove the console and build out the displayStory function

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    // this is a good reminder of when to use bracket vs dot notation for objects
    //storyObj[genre]

    result.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
