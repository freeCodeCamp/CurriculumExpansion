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



/*
The last part of the `projection` declaration will use D3's `.center()` method.
It takes an array of `[longitude, latitude]` coordinates, and centers the
projection there.

D3 will use the default value of `[0°, 0°]`, so this method allows you to put any
country or place in the center.

For a Mercator projection, 0° longitude works great, but we won't need to see as
much of Antarctica as Greenland, so we'll move the center up to 20° latitude.

Chain the `.center()` method to your projection and pass it an array with these
two values.
*/
