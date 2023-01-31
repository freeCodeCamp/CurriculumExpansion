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



/*
Another basic SVG shape that is critical for creating a map in D3 is the `path`
element. You use it to draw lines, curves, arcs, and polygons, among other
things.

A `path` element has one attribute, `d`, that holds a sequence of commands for
what to draw (a horizontal line, a curve, etc.) and where to draw it within the
coordinate system of the `svg`.

After your `rect` code, start a new chain of methods off the `svg` variable, this
time, use `.append()` to add a `path` element to the page.
*/
