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
const g = svg.append("g");

// Create requests to retrieve JSON topography data and CSV population data
const getJSONData = d3.json(mapPath);
const getCSVData = d3.csv(popPath);

Promise.all([getJSONData, getCSVData])



/*
Now you finally have access to data to build a data-driven document - your map!

The next step is to write a callback function that will contain all the code to
construct the map, add pan and zoom behavior, and add a legend.

The `Promise.all()` call returns one value holding the resolved `Promises` in the
order they were passed. Chain a `.then()` method to your `Promise.all()` call and
pass it a `function` with one parameter `values`, to represent the `Promise.all()`
return value. Keep the body of the `function` empty - you'll fill it in over the
remaining lessons.
*/
