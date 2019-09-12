---
id: 5d79253297c0ebb149ea9fed
title: Step 1
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
In functional programming, we prefer immutable values over mutable values.
Mutable values (declared with <code>var</code> or <code>let</code>) can lead to unexpected behaviors and bugs.
Values declared with <code>const</code> cannot be reassigned, which makes using them easier because you don't have to keep track of their values.
Start by creating an empty <code>infixToFunction</code> object using <code>const</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create empty <code>infixToFunction</code> object using <code>const</code>.
    testString: assert(/const\s+infixToFunction\s*=\s*\{\s*\}/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>


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
