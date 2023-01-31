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
      .domain([
          500000,
          5000000,
          10000000,
          25000000,
          50000000,
          100000000,
          1000000000])
      .range(d3.schemeYlOrRd[8]);

  // Create an object that maps country ID to population
  let popMap = {};



});

/*
Recall that the CSV data you imported holds the population information for each
country, along with the country ID and name. This is available in your program
in the `population` variable. It's an array of objects for each country with
keys for `ID`, `Name`, and `Population`. Here's an example of the data structure:

```
[
  {ID: "AFG", Name: "Afghanistan", Population: "35530081"},
  {ID: "ALB", Name: "Albania", Population: "2873457"},
  ...
  {ID: "ZWE", Name: "Zimbabwe", Population: "16529904"}
]
```

Here, you're going to build the `popMap` object so it maps the `ID` value to the
population. The object will look like this:

```
{"AFG": 35530081, "ALB": 2873457, ...}
```

Apply a `.forEach()` method to the `population` array. Pass it an arrow function
using `d` as the parameter. In the function, set `popMap[d.ID]` to the population
value.

Make sure to use a `+` in front of the population value to convert it to a number,
otherwise you'll save the value as a string in your `popMap` object.
*/
