---
id: 5d792533bb38fab70b27f527
title: Step 16
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
<code>arg1</code> and <code>arg2</code> are the numbers inputed by the user in a string such as "1+3".
Pass <code>parseFloat(arg1)</code> and <code>parseFloat(arg2)</code> as the arguments to <code>infixToFunction[fn]</code> (remember <code>infixToFunction[fn]</code> is a function).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pass <code>parseFloat(arg1)</code> and <code>parseFloat(arg2)</code> as the arguments to <code>infixToFunction[fn]</code>.
    testString: const regex = /([0-9.]+)([+-\/*])([0-9.]+)/; assert(infixEval("23+35", regex) === "58" && infixEval("100-20", regex) === "80" && infixEval("10*10", regex) === "100" && infixEval("120/6", regex) === "20");

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
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn]
  );


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