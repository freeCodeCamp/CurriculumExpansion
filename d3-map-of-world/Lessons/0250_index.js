// TopoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries



/*
Your `svg` shapes were lovely, but it's time to get back to drawing the map of
the world.

The first step is getting the data that will describe the shape of the countries.
This information, along with various metadata, is saved in a specific form of
`JSON` - either GeoJSON or TopoJSON.

GeoJSON is a data structure that holds geographic features. They can include
points (such as a city), lines (a street), and multipolygons (a boundary) among
other shapes. The also include that feature's coordinates. You'll use the sequence
of coordinates that describe each country's boundary to draw the `path` elements
on your `svg`.

(Don't worry, you won't need to manually create these `paths` like you did in
the prior lessons- D3 has all the built-in functionality to extract the data and
generate them for you!)

TopoJSON is an extension of GeoJSON, but it removes duplication. Any shared
boundaries between countries would be saved only once as an arc. This results in
smaller files that are easier to use in a web application.

There's a TopoJSON file named `naturalEarth50TopoJSON.json` in the project
folder. Using the `const` keyword, create a variable named `mapPath` that holds
the path to the file as a string.
*/

// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
