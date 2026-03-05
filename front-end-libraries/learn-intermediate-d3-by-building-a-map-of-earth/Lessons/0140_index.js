// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")



/*
For the new rectangle element to appear on the page properly, it needs a few more
attributes - namely `x`, `y`, `height`, and `width`. You have to specify where SVG
should start drawing the rectangle (the `x` and `y`), and how big the rectangle
is (the `height` and `width`).

SVG uses a basic `x, y` coordinate system to position elements, and the origin -
the (0, 0) coordinate - is in the top-left corner. This means that higher `x`
values push an element more to the right, and higher `y` values push it down.

Chain an `.attr()` method to your `svg.append("rect")` code which adds an `"x"`
attribute with the value of `400`.
*/
