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
    .attr("fill", "yellow");

svg.append("path")



/*
You're going to use your `path` element to draw a simple triangle  on the `svg`
element.

In order to better see what you're drawing as you add commands, first add some
styling to color the line of the `path`.

Chain an `attr()` method to add a `stroke` attribute, and give it a value of
`"orange"`.
*/
