document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(
    document.getElementsByClassName('cal-control')
  ).map();
}
/*
Now we need to provide a function to `map()` that will be performed on each item of the array.

This function will take the original item as an argument, in our case we'll call it `meal`.  Inside the `.map()` parentheses, insert an empty function that takes `meal` as a parameter, like:
```
function(meal){
}
```

Enter in the above function as an argument in between the parentheses of the `.map()` function.
*/
