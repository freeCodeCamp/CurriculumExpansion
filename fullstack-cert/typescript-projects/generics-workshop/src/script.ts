// I believe this can be achieved in under 30 steps with the filler code that doesn't have to do with the workshop itself being prefilled. If we want to trim it even more we can look at cutting out the Bug type, or the extra guard on the types of input events. The input guard could be refactored into a function that takes a callback and accepts a Generic for the type of event we want to filter, I think.

// Start off the camper with these three classes
class Bug {
  emoji: string;
}

class Bee extends Bug {
  buzzes: boolean = true;

  constructor() {
    super();

    this.emoji = "🐝";
  }
}

class Spider extends Bug {
  chitters: boolean = true;

  constructor() {
    super();

    this.emoji = "🕷️";
  }
}

// Start the camper off with the map
const bugMap = {
  "bee": new Bee(),
  "spider": new Spider(),
};

// Have the selectors written from the start as well
const bugEmojiElement = document.querySelector('#bug-emoji') as HTMLParagraphElement;
const bugNameElement = document.querySelector('#bug-name') as HTMLParagraphElement;

// Have the camper write these two guards
function isBee(bug: Bug): bug is Bee {
  return bug instanceof Bee;
} 

function isSpider(bug: Bug): bug is Spider {
  return bug instanceof Spider;
} 

// Probably start with a renderer that has no generic type, and have the camper
//  modify this class throughout the workshop
class Renderer<T extends Bug> {
  currentBug: Bug = bugMap["bee"];
  name: string = "";

  constructor() {
    // Have these selectors pre-written for the camper.
    const bugForm = document.querySelector('#bug-form') as HTMLFormElement;
    (bugForm.querySelector("#species") as HTMLSelectElement).value = "bee";
    (bugForm.querySelector("#name") as HTMLInputElement).value = "";

    bugForm.addEventListener("input", e => onBugInputChange(e, this));
    bugForm.addEventListener("change", e => onBugSelectChange(e, this));

    this.updateName("");
  }

  updateEmoji(bug: T) {
    this.currentBug = bug;
    bugEmojiElement.innerText = bug.emoji;
    this.updateName(this.name);
  }

  updateName(name: string) {
    this.name = name;
    if (isBee(this.currentBug)) {
      bugNameElement.innerText = `${this.name} buzzes!`;
    }
    if (isSpider(this.currentBug)) {
      bugNameElement.innerText = `${this.name} chitters!`;
    }
  }
}


// Camper writes these guards
function isInput(element: EventTarget | null): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}

function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}

// These could start as implemented without the generic and the camper modifies them
function onBugSelectChange<T extends Bug>(e: Event, renderer: Renderer<T>) {
  if (isSelect(e.target)) {
    renderer.updateEmoji(bugMap[e.target.value])
  }
};

function onBugInputChange<T extends Bug>(e: Event, renderer: Renderer<T>) {
  if (isInput(e.target)) {
    renderer.updateName(e.target.value);
  }
};

function hookup() {
  new Renderer<Bug>;
}

hookup();
