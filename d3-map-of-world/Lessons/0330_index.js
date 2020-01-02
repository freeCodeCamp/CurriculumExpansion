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



/*
Next, you'll need to set up the D3 code that will later do the hard work of
converting your GeoJSON map data into paths to draw the country borders.

D3's `.geoPath()` method takes a GeoJSON feature object and generates SVG paths
from it. You don't have the GeoJSON feature object yet - you're just doing setup
here. You'll use the D3 topoJSON library (which you linked to in your HTML
already) to create it from the map data in a future lesson.

Using the `const` keyword, declare a variable named `path` and set it equal to
the `d3.geoPath()` method.
*/
