const isSpam = msg => {
  const blacklistRegexes = [
    /viagra/i,
    /free money/i,
    /work from home/i,
    /stock alert/i,
    /dear friend/i
  ];
  /*
  Great, refactoring is done, now back to business! Let's start handling those M4ngL3D stR1Ng5 ("mangled strings")!

  Let's start with "i", which can be mangled to "1" or "|".

  When you're looking for multiple possible characters to match, you need a character class. Character classes are written with square brackets (`[]`).

  For example, `/foo ba[rz]/` matches both "foo bar" and "foo baz".

  Change all occurrences of the character `i` in our `blacklistRegexes` to match `i`, `1`, or `|`. Note that this doesn't include the `i` flags at the end!
  */

  return blacklistRegexes.some(re => re.test(msg));
};
