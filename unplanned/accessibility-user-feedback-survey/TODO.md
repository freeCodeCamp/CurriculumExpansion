# TODO

## QUESTIONS

* Based on my understanding of the HTML5 spec, each _section_ (including nav, article, etc.) has its own hierarchy of h1..h6. Is this correct? The old advice used to be "only one h1 per HTML document", but I believe this is now updated from both a11y and SEO standpoints.
* Can anyone help out with styling (colors) of the nav elements on the inaccessible, i.e. "before" version? Ideally, the colors should be attractive yet fail WCAG AAA (better still if they fail WCAG AA)... currently they fail WCAG AAA, but look kinda ugly. The idea is that "even attractively-matched colors can still be inaccessible".
   The function `checkContrasts()` is available in the global scope to test WCAG compliance.


```javascript
// for testing language complexity on `about.html` page (ESL/dyslexia/cognitive impairments etc.)

const str = 'CodeHouse is the premier destination for inquisitive souls with a passion for programming and a drive to excel. We cater to a diverse range of demographics, from young whippersnappers to grizzled veterans. We leverage our ample industry experience and our unique pedagogical approach, which involves repeated practice and turns students from mere neophytes into experts by utilizing a project-based methodology, removing the necessity for rote learning or dry textbooks. If you’re not convinced we’re right for you, try dropping by one of our Coffee and Code events — the first three are complimentary for new students!';

const containerNode = document.createElement('div');
containerNode.innerHTML = `<p>${str}</p>`;

const splitter = /(?:\s|[,.—!?-])+/;

const avgWordLength = str => {
  const words = str.trim().split(splitter);
  const total = words.reduce((acc, word) => acc + word.length, 0);
  return total / words.length;
};

const avgWordsInSentence = str => {
  const sents = str.split('.').map(s => s.trim());
  const lengths = sents.map(s => s.split(splitter).length);
  const total = lengths.reduce((acc, num) => acc + num, 0);
  return total / sents.length;
};

const avgCharsInParagraph = containerNode => {
  const len = containerNode.textContent.length;
  const nParas = containerNode.querySelectorAll('p').length;
  return len / nParas;
};

// console.log(avgWordLength(str), avgWordsInSentence(str), avgCharsInParagraph(containerNode));
```
