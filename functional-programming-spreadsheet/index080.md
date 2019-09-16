---
id: 5d79253378595ec568f70ab6
title: Step 11
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Add similar definitions for <code>-</code>, <code>*</code> and <code>/</code> in <code>infixToFunction</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add similar definitions for <code>-</code>, <code>*</code> and <code>/</code> in <code>infixToFunction</code>.
    testString: assert(infixToFunction["-"](10, 2) === 8 && infixToFunction["*"](10, 10) === 100 && infixToFunction["/"](100, 10) === 10);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y
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