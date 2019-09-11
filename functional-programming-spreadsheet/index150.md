---
id: 5d7925330f300c342315066d
title: Step 20
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
In `highPrecedence`, define `regex` to be `/([0-9.]+)([*/])([0-9.]+)/`.
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
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  return str;
};


</script>
```

</div>
