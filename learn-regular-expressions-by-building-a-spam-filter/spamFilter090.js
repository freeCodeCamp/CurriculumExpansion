const isSpam = msg => {
  const blacklistRegexes = [
    /v[i1|][a@4][g9]r[a@4]/i,
    /fr[e3][e3] m[o0]n[e3]y/i,
    /w[o0]rk fr[o0]m h[o0]m[e3]/i,
    /[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7]/i,
    /d[e3][a@4]r fr[i1|][e3]nd/i
  ];
  /*
  TODO
  */

  return blacklistRegexes.some(re => re.test(msg));
};
