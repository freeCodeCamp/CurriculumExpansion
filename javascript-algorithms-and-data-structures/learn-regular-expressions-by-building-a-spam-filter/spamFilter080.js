const isSpam = msg => {
  const blacklistRegexes = [
    /v[i1|]agra/i,
    /free money/i,
    /work from home/i,
    /stock alert/i,
    /dear fr[i1|]end/i
  ];
  /*
  Other characters can be mangled too. Luckily, we've managed to obtain a copy of _The Spammer's Handbook_ by S. Pam Merchant, which helpfully provides a lookup table of all the characters they use:

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

  Replace all instances of the relevant characters with the appropriate character classes. For an extra challenge, you can try doing the replacements programmatically, but that's not a requirement for this project (hand coding is fine too).
  */

  return blacklistRegexes.some(re => re.test(msg));
};
