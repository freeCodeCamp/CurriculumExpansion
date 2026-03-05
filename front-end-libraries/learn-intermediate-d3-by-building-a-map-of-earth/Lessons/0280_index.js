// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);



/*
The coordinates in the TopoJSON features describe countries as they are on Earth's
three-dimensional surface. You need to translate them so the countries display
properly on your two-dimensional `svg`. A map **projection** is a method for making
this conversion.

Projections have to make adjustments to convert 3D coordinates onto a 2D surface,
so they all have some form of distortion. They generally try to preserve one aspect
- some keep areas accurate, some distance, and some the angles between places (good
for nautical navigation).

For this map, you'll use a classic Mercator projection. Using the `const` keyword,
declare a variable named `projection` and set it to `d3.geoMercator()`.
*/
