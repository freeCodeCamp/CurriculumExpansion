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



/*
Now that a lot of the map setup is ready, it's time to load the data you'll need
to build the map.

D3 has built-in support to parse and load different file types, including both
JSON and comma-separated values (CSV). Both `d3.json()` and `d3.csv()` use
JavaScript's fetch API and return promises. They take a URL or file path to the
data as the first argument (you won't need the other optional arguments).

The first step to load the map and population data is to set up variables that
will hold each request.

Using the `const` keyword, declare a variable named `getJSONData` that is set to
D3's `.json()` method, and pass the method your `mapPath` variable.
*/
