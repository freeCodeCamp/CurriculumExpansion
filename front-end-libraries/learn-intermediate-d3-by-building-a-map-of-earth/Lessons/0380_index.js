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



/*
Your project uses two data sources, which you want to have access to in your
code all at once. (Technically, the topography data include population estimates,
but the World Bank numbers are from a known source and year).

You may come across D3 example code online with nested `.json()` calls, but
JavaScript's `Promise.all()` function allows you make all your requests together
then returns one `Promise`.

Start a new line of code with a `Promise.all()` call. Pass it an array containing
the two variables with your `json` and `csv` requests.
*/
