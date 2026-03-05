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



/*
Remember, the map data that the `.geoPath()` method converts into SVG paths is
for countries as they look on a sphere. The other critical piece of information
your `path` variable needs is the projection, so it can draw those 3D boundaries
onto your 2D `svg` the way you want them displayed.

Chain the `.projection()` method to your `path` variable, and pass it your
`projection` variable.
*/
