// Setup
const svgWidth = 1000;
const svgHeight = 700;



/*
D3 has a `.select()` method that allows you to grab an HTML element in the DOM
and work with it. For example, you would select the first item with the class
`hello` with `d3.select(".hello")`.

You'll need the method here to add an `svg` element to the page to hold your map.

Using the `const` keyword, declare a variable named `svg`. Set it equal to the
D3 `select` method, and pass the method the `map` `id` of the `div` you created.
*/
