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



/*
You'll use four basic commands to draw the triangle, which will start from the
point (20, 20) on your `svg` element.

All commands can be written with a capital letter, followed by absolute coordinates
on the page, or a lowercase letter, followed by relative movements. The "move"
command uses `M x y` syntax, where `x` and `y` are coordinates on the `svg`.
The command is like picking up your pen and placing the tip at that point to
start drawing there.

Chain the `d` attribute to your `path` and pass it a value of `"M 20 20"`.
*/
