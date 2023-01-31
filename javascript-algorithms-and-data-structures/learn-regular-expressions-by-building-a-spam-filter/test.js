/*

Concepts covered:

concept                          | syntax
---------------------------------|--------------------------
testing for a match              | test
replacing matches                | replace
...with a string                 | replace(re, '...')
...with a function               | replace(re, m => ...)
character classes                | []
non-capturing groups             | (?:)
capturing groups                 | ()
numeric reference                | \1
alternation                      | |
0 or more operator               | *
1 or more operator               | +
quantifiers with minimum bounds  | {n,}
space and non-space              | \s and \S
case-insensitive flag            | i
global flag                      | g
start                            | ^
end                              | $

*/

const spamPhrases = [
  'viagra', 'free money', 'work from home', 'stock alert', 'dear friend'
];

const mangleMap = {
  a: [ 'a', '@', '4' ],
  b: [ 'b', '8' ],
  c: [ 'c', '{', '[', '(' ],
  e: [ 'e', '3' ],
  g: [ 'g', '9' ],
  i: [ 'i', '1', '|' ],
  o: [ 'o', '0' ],
  s: [ 's', '5' ],
  t: [ 't' , '7' ],
  z: [ 'z', '2' ]
};

const tests = [
  [ 'Hi Michelle,', false ],
  [ 'The PPT from the meeting is attached', false ],
  [ 'Are you free on Wednesday 19th?', false ],
  [ 'I\'ll see you at work tomorrow.', false ],
  [ 'This may be gibberish, but it\'s harmless gibberish', false ],
  [ '', false ]
];

const randInt = max => Math.floor(Math.random() * (max + 1));

const manglePhrase = phrase => {
  const mangledPhrase = phrase.split('').map(char => {
    const mangledChars = mangleMap[char];
    if (!mangledChars) return char;
    else {
      const len = mangledChars.length;
      const c = mangleMap[char][randInt(len - 1)];
      return c[randInt(1) === 1 ? 'toUpperCase' : 'toLowerCase']();
    }
  });

  return mangledPhrase.join(' '.repeat(randInt(2)));
};

spamPhrases.forEach(phrase => {
  for (let i = 0; i < 5; i++) {
    const mangled = manglePhrase(phrase);
    tests.push([mangled, true]);
  }
});


tests.forEach(test => {
  if (isSpam(test[0]) !== test[1]) console.log(test);
  // isSpam is currently a global defined in spamFilter.js
});

