---
id: 5d79253358e8f646cbeb2bb0
title: Step 15
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Change the <code>"+"</code> in the call to <code>infixToFunction</code> to <code>fn</code>.
<code>fn</code> is the operator that the user inputs (<code>+</code>, <code>-</code>, <code>*</code> or <code>/</code>) - we use <code>infixToFunction</code> to get the function that corresponds to it.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Change the <code>"+"</code> in the call to <code>infixToFunction</code> to <code>fn</code>.
    testString: assert(code.replace(/\s/g, "").includes('str.replace(regex,(match,arg1,fn,arg2)=>infixToFunction[fn])'));

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
    infixToFunction["+"]
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
