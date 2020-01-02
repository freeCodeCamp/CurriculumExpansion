// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("x", 400)



/*
Next, chain another `.attr()` method to add a `"y"` attribute to your rectangle,
with a value of `300`. This plus the last line of code positions the rectangle's
top-left corner 400 pixels to the right of the origin and 300 pixels down.

Remember that the origin (0, 0) for an `svg` element is in the top-left corner.
*/
