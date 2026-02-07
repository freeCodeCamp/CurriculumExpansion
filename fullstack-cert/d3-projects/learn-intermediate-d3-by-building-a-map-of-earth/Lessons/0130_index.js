// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);



/*
We're going to take a quick detour from setting up the map to explain a few
concepts about SVG. SVG is a web standard for 2-dimensional images, but also
supports interaction and animation.

SVG supports a variety of different shapes. With D3, you can add shapes to your
`svg` element with the `.append()` method, passing it the name of the shape as a
string. For example, you'd add a circle by writing `svg.append("circle")`.

Using the `circle` example above as a template, add a rectangle (`"rect"`)
element to the page.
*/
