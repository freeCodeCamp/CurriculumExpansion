---
id: 5d792532b07918c3a5904913
title: Step 5
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Anonymous functions are functions without names - they are used only once and then forgotten.
The syntax is the same as for normal functions but without the name:
```
function(x) {
  return x
}
```
Make the function `add` anonymous and remove the `addVar` definition (as `add` isn't defined anymore).
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

const infixToFunction = {};

function add(x, y) {
  return x + y;
}

const addVar = add;


</script>
```

</div>
