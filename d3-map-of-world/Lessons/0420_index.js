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



});

/*
Often with data visualizations, you'll want to size or color items based on the
underlying values in the dataset. For example, in a bar chart, you want the height
of each bar to tie to the value it's showing. In your map, you're going to color
the country based on how many people live there.

D3 scales provide the functionality to do this. But before getting into scales,
you're going to want to understand your data. The data type (discrete or
continuous), how they're distributed, and what you're trying to visualize will
all help to determine the type of scale that is most appropriate to use.

When D3 imported the CSV data (available in `population.Population`), it loaded
the figures as strings. You need to first map them into an array as numbers before
you can analyze them.

Using the `const` keyword, declare a variable named `popArray`, then apply the
`.map()` method on `population`. Use an arrow callback function with one parameter
`d` that returns the population figures changed to numbers (you can access them
with `d.Population`). A shortcut to cast a string to a number in JavaScript is to
add a `+` in front of the string, for example `+numAsString`.
*/
