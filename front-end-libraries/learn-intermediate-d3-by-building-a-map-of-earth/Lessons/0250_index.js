// TopoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries



/*
Your `svg` shapes were lovely, but it's time to get back to drawing the map of
the world.

The first step is getting the data that will describe the shape of the countries
from either GeoJSON or TopoJSON.

GeoJSON is a data structure that holds geographic features including points (such
as a city), lines (a street), and multipolygons (a boundary), along with coordinates
for each feature.

TopoJSON is an extension of GeoJSON, but it removes duplication. This results in
smaller files that are easier to use in a web application.

Using the `const` keyword, create a variable named `mapPath` that holds the path
to the `naturalEarth50TopoJSON.json` file as a string.
*/

// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
