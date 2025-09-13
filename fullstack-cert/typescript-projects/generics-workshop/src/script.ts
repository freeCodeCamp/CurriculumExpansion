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

function isBee(bug: Bug): bug is Bee {
  return bug instanceof Bee;
} 

function isSpider(bug: Bug): bug is Spider {
  return bug instanceof Spider;
} 

class Renderer<T extends Bug> {
  currentBug: T;
  bugMap: Record<string, T>;

  bugEmojiElement: HTMLParagraphElement;

  constructor(defaultBug: T, bugMap: Record<string, T>) {
    this.currentBug = defaultBug;
    this.bugMap = bugMap;

    const bugForm = document.querySelector('#bug-form') as HTMLFormElement;
    this.bugEmojiElement = document.querySelector<HTMLParagraphElement>('#bug-emoji')!;

    bugForm.querySelector<HTMLSelectElement>("#species")!.value = "bee";

    bugForm.addEventListener("change", e => onBugSelectChange(e, this));
  }

  updateEmoji(bugName: string) {
    this.currentBug = this.bugMap[bugName];
    this.bugEmojiElement.innerText = this.currentBug.emoji;
  }
}

function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}

function onBugSelectChange<T extends Bug>(e: Event, renderer: Renderer<T>) {
  if (isSelect(e.target)) {
    renderer.updateEmoji(e.target.value)
  }
};

const bugMap: Record<string, Bug> = {
  "bee": new Bee(),
  "spider": new Spider(),
};

new Renderer<Bug>(bugMap["bee"], bugMap);
