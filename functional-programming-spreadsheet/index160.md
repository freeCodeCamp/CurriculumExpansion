---
id: 5d7925334c5e22586dd72962
title: Step 22
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
The ternary operator has the following syntax:

```js
const result = condition ? valueIfTrue : valueIfFalse;
const result = 1 === 1 ? 1 : 0; // 1
const result = 9 > 10 ? "Yes" : "No"; // "No"
```

Use this operator to return <code>str</code> if <code>str === str2</code>, and an empty string (<code>""</code>) otherwise.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use the ternary operator to return <code>str</code> if <code>str === str2</code>, and an empty string (<code>""</code>) otherwise.
    testString: assert(highPrecedence("2*2") === "" && highPrecedence("2+2") === "2+2" && code.includes("?"));

```

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
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str2;
};


</script>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>


</section>