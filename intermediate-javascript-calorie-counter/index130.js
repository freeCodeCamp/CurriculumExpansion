document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(
    document.getElementsByClassName('cal-control')
  ).map();
}
/*
Now we need to provide a function to `map()` that will be performed on each item of the array.
You function will take the original item, in our case we'll call it `meal`, and return the value of that item.  Similar to what we previously did:

```
function(meal){
  return meal.value}
```

We can simplify the function further by using an arrow function:

`meal => meal.value`

Enter in the above function as an argument in between the parentheses of the .map() function.
*/
