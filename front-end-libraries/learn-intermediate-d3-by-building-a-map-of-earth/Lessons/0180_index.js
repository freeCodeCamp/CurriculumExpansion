// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("x", 400)
    .attr("y", 300)
    .attr("width", 200)
    .attr("height", 100)



/*
Now the `rect` element has all necessary attributes for it to render on the page,
with a default `fill` color of black.

You've styled a D3-created element (the `svg` tag) with your CSS stylesheet, but
you may need to style an element dynamically based on data or user interaction.
The `.attr()` method also works for some styling, depending on the attribute.

Note that a CSS rule in your stylesheet would take precedence over styling added
with the `.attr()` method.

Chain one more `.attr()` method to your `rect` to make the `fill` color `"yellow"`.
*/
