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
    .attr("d", "M 20 20 H 90")



/*
The next command will tell the page to draw a vertical line. This command is
similar to drawing a horizontal line. The capital letter, or absolute coordinate
version syntax is `V y` and the lowercase letter, or relative version is `v dy`.
The `y` is a fixed coordinate to draw to, the `dy` is the number of units to draw
the line up or down.

Edit the value for your `d` attribute so after the horizontal line, there's a
vertical line to the absolute `y` coordinate of `90`.
*/
