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
    .attr("d", "M 20 20")



/*
The next command you'll add will draw a horizontal line. The command is `H x`,
where the `x` is the `x` coordinate where to stop drawing. In other words, this
command draws a line from your current position (at the point (20, 20)) to the
given `x` value, keeping the `y` position the same.

Edit the value for your `d` attribute so after the `M 20 20` there's a space,
then the command to draw a horizontal line to the `x` coordinate of `90`.
*/
