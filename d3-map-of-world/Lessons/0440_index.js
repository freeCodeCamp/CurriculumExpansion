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
  const extent = d3.extent(popArray);  // [12876, 1386395000]
  console.log("Min population is: " + extent[0]);  // 12,876 -> Nauru
  console.log("Max population is: " + extent[1]);  // 1,386,395,000 -> China

  // Create a scale to map population value to a color



});

/*
You should see that the minimum value is 12,876 (Nauru) and the maximum value is
1,386,395,000 (China). That's a huge spread, with five factors of ten between
the values! The goal is to display each country in a color that indicates it's
population level, so you need a D3 scale for the job.

Scales are basically functions that take input (values from your data) and
provides a mapping for how to display that on a web page. Recall the bar chart
example in an earlier lesson, the scale would take the values for the bars as
input, then output the number of pixels the `height` of the bar needs to be on
the screen.

The `d3.scaleThreshold()` is one choice that works here. You manually set the
threshold values that create segments in the data. One threshold will split your
data into two buckets - values less than the threshold are in the first bucket
and values equal or greater than the threshold are in the second bucket. Those
buckets are then mapped to two output values - in this case it would be two colors
that you select.

This scale allows you to take the wide range of continuous population values,
split them into buckets, and map the buckets to a discrete set of colors.

Using the `const` keyword, declare a variable named `color` and set it to a new
D3 threshold scale.
*/
