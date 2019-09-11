---
id: 5d79253386060ed9eb04a070
title: Step 17
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
The `match` variable is currently unused, which can lead to unused variable warnings in some linters.
To fix this, prefix or replace it with an underscore (`_`) - both ways signal to the reader and linter that you're aware you don't need this.
Note that a single underscore can only be used once in a function and may conflict with some libraries (Lodash, Undrescore.js).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );


</script>
```

</div>
