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
  const color = d3.scaleThreshold()



});

/*
The scale requires two pieces of information to work properly. First is what it
should expect for input values, which is the *domain* of the scale. Next it needs
output values to map the inputs to, which is the *range* of the scale. Then D3
can do the underlying math that creates the mapping.

D3 has methods for both `.domain()` and `.range()`. For a threshold scale, the
domain is an array that holds the threshold values, which will tell D3 how to
segment different population levels.

Chain the `.domain()` method to the `.scaleThreshold()` and pass it an array with
the following seven thresholds: `500000, 5000000, 10000000, 25000000, 50000000,
100000000, 1000000000`. This loosely breaks your population data into buckets
logarithmically, but because you're using manual thresholds, you have complete
control over how the data get divided up.
*/
