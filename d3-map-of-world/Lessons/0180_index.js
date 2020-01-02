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

You've already styled a D3-created element (the `svg` tag) with your CSS
stylesheet. D3 also provides methods to style elements within the script, which
you'll need when you want to dynamically style an element based on data.

`fill` happens to be an attribute of a `rect` element, so you have two more
choices here. You can use the `.attr()` method: `.attr("fill", "colorChoice")`
or D3's `.style()` method: `.style("fill", "colorChoice")`.

The difference between the three is precedence. CSS styles will override the
`.attr()` method, but the `.style()` method adds inline CSS, and will override
the CSS stylesheet.

This project will use a mix: attributes will use `.attr()`, static styles will
use CSS rules in the stylesheet, and dynamic styles will use `.style()`.

Chain one more `.attr()` method to your `rect` to make the `fill` color `"yellow"`.
*/
