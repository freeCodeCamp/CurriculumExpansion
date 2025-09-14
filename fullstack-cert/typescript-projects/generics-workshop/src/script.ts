class Bug<T> {
  emoji: T;
  emojiElement: HTMLParagraphElement
  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement
  }

  render() {}
}

class Bee extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🐝";
  }

  render() {
    this.emojiElement.innerText = this.emoji;
  }
}

class Spider extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🕷️";
  }

  render() {
    this.emojiElement.innerText = this.emoji;
  }
}

function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}

const bugEmojiElement = document.querySelector<HTMLParagraphElement>('#bug-emoji')!;
const bugMap: Record<string, Bug<string>> = {
  "bee": new Bee(bugEmojiElement),
  "spider": new Spider(bugEmojiElement),
};

const selectElement = document.querySelector<HTMLSelectElement>('#species')!;
selectElement.addEventListener("change", e => {
  if (isSelect(e.target)) {
    bugMap[e.target.value].render()
  }
});
