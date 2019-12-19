// Setup
const svgWidth = 1000;
const svgHeight = 700;


/*
Since you linked to a local copy of the D3 script in the `HTML` file, all of D3's
methods are now available for you to use.

D3 has a `.select()` method that allows you to grab an HTML element in the DOM
and work with it. The method takes the HTML item you want in quotes - this can be
the name of the element or any valid CSS selector. The first match is returned.

For example, you would select an item with a class `hello` with
`d3.select(".hello")`.

You'll need the method here to add the `svg` element to the page, (this will hold
your map).

Using the `const` keyword, declare a variable named `svg`. Set it equal to the
D3 `select` method, and pass the method the `map` `id` of the `div` you
created.
*/
