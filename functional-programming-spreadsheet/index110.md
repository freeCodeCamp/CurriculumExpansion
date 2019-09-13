---
id: 5d792533a5c42fb4d1a4b70d
title: Step 14
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Replace the second argument of <code>str.replace</code> with an anonymous function, which takes <code>match</code>, <code>arg1</code>, <code>fn</code>, and <code>arg2</code>, and returns <code>infixToFunction["+"]</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add the anonymous function.
    testString: assert(code.replace(/\s/g, "").includes('str.replace(regex,(match,arg1,fn,arg2)=>infixToFunction["+"])'));

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

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);


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
