---
id: 5d792533a5c42fb4d1a4b70d
title: Step 14
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Replace the second argument of `str.replace` with an anonymous function, which takes `match`, `arg1`, `fn`, and `arg2`, and returns `infixToFunction["+"]`.
</section>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);


