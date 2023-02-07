// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;
const scale = svgWidth / (2 * Math.PI);

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const projection = d3.geoMercator()
    .scale(scale)
    .translate([svgWidth / 2, svgHeight / 2])
    .center([0, 20]);

const path = d3.geoPath()
    .projection(projection);

// Create a group to hold the countries



/*
When you start generating the paths to draw the countries on your map, you could
append them directly onto the `svg`. However, you're going to add pan and zoom
functionality to the map in a later lesson. You're also going to add other
elements, like a legend, which you won't want to target with the zoom behavior.

To make this task easier when you get to it, you'll want to keep the paths
separate from everything else. There's an SVG group (`g`) tag that can hold your
paths and keep them organized from the other elements that will go on the `svg`.

Using the `const` keyword, declare a variable named `g`, then use the `.append()`
method on your `svg` to add a `"g"` element.
*/
