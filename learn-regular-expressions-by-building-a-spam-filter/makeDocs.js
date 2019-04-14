// documentation generation

const spamPhrasesMD = '**Spam phrases:**\n\n'
  + spamPhrases.map(phrase => `* ${phrase}`).join('\n');

/*
**Spam phrases:**

* viagra
* free money
* work from home
* stock alert
* dear friend
*/

const mangleMapMD = `
Character | Mangled versions
----------|-----------------
${Object.keys(mangleMap).map(key => `${key.padEnd('Character'.length, ' ')} | ${mangleMap[key].join(', ')}`).join('\n')}
`;

/*
Character | Mangled versions
----------|-----------------
a         | a, @, 4
b         | b, 8
c         | c, {, [, (
e         | e, 3
g         | g, 9
i         | i, 1, |
o         | o, 0
s         | s, 5
t         | t, 7
z         | z, 2
*/
