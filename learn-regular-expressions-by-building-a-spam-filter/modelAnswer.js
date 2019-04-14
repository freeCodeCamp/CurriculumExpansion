// model answer
// - student will produce something functionally equivalent
// but using regex literals exclusively (no `makeRegex`)

const wordCondenser = /(?:^|\s)\S(?:(\s+)\S)(?:\1\S)*(?:$|\s)/g;
const spaceCondenser = /\s{2,}/g;

const condenseSpaces = msg => {
  return msg
    .replace(wordCondenser, m => m.replace(/\s+/g, ''))
    .replace(spaceCondenser, ' ');
};

const makeRegex = str => {
  const content = str.split('').map(char => {
    const mangledChars = mangleMap[char];

    if (!mangledChars || mangledChars.length === 1) {
      return char;
    } else {
      return `[${mangledChars.join('')}]`;
    }
  });

  return new RegExp(`(?:^|\\s)${content.join('')}(?:$|\\s)`, 'i');
};


const blacklistRegexps = spamPhrases.map(phrase => makeRegex(phrase));

const isSpam = msg => {
  const spacesCondensed = condenseSpaces(msg);

  return blacklistRegexps.some(re => re.test(spacesCondensed));
};

/*
blacklistRegexps:

/(?:^|\s)v[i1|][a@4][g9]r[a@4](?:$|\s)/i,
/(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i,
/(?:^|\s)w[o0]rk fr[o0]m h[o0]m[e3](?:$|\s)/i,
/(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i,
/(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i
*/

// run tests
