---
id: 5d7925330918ae4a2f282e7e
title: Step 12
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Use arrow function syntax to define a function `infixEval` which takes `str` and `regex` as arguments and returns `str.replace(regex, "")`.
</section>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

/*
Use arrow function syntax to define a function `infixEval` which takes `str` and `regex` as arguments and returns `str.replace(regex, "")`.
*/
