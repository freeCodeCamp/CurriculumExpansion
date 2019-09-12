---
id: 5d7925337954ed57a565a135
title: Step 7
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
This is possible because the anonymous function has been immediately assigned to a value - this is effectively the same as using a named function.
Rewrite <code>addVar</code> using ES6's arrow syntax:

```js
const fn = (x, y) => x;
```

Note that the value is returned implicitly.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Rewrite <code>addVar</code> using ES6's arrow syntax.
    testString: assert(/const\s+addVar\s*=\s*\(\s*x\s*,\s*y\s*\)\s*=>\s*x\s*\+\s*y/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {};

const addVar = function(x, y) {
  return x + y;
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
