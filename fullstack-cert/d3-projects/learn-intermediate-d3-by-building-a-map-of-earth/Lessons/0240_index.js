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
    .attr("stroke", "orange")
    .attr("d", "M 20 20 H 90 V 90")



/*
The last command in your `d` sequence will close off the shape. You'll use the
"line" command for this, which uses the syntax `L x y` (or `l dx dy`) and draws
a straight line from the current position to the given one. Add this to the
sequence so the `path` returns to the starting point of `(20, 20)`.
*/
