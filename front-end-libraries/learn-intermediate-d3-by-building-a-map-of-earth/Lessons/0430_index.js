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

Promise.all([getJSONData, getCSVData]).then(function(values) {
  const json = values[0];
  const population = values[1];

  // Find the max and min population values in the data to better understand it
  const popArray = population.map(d => +d.Population);



});

/*
D3 provides both `d3.max()` and `d3.min()` functions you could apply here to see
the range of populations in the data. However, there's also `d3.extent()` function
that returns an array with the minimum and maximum values together.

Using the `const` keyword, declare a variable named `extent` and use the D3
function on `popArray`. Then, write two `console.log()` calls to print:
`"Min population is: ..."` and `"Max population is: ..."`, replacing the `...`'s
with the respective values from `extent`. You can access `extent` with bracket
notation and indexing.
*/
