// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;
const scale = svgWidth / (2 * Math.PI);

// ISO 3166-1 Alpha 3 country code identifier
const idCode = "ADM0_A3";

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
  population.forEach(d => {
    popMap[d.ID] = +d.Population
  });

  const countries = topojson.feature(json, json.objects.countries).features;

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter().append("path")
      .attr("class", "countries")
      .attr("d", path)
      .style("stroke-width", 0.5)
      .style("opacity", 0.75)
      .style("fill", d => {



      })

});

/*
Remember that all code after the `.enter().append("path")` sequence is run for
each item that D3 finds in the `countries` dataset. The dataset is in JSON format
(made of nested arrays and objects), specifically it's an array of 241 objects
that look like this:

```
{
  geometry: {type: "Polygon", coordinates: [...]},
  properties: {
    ABBREV: "Zimb.",
    ABBREV_LEN: 5,
    ADM0_A3: "ZWE"
    ...
    NAME_LONG: "Zimbabwe",
    ...  // many more properties
  },
  type: "Feature"
}
```

The callback function has access to this object with the `d` parameter. You can
use either dot or bracket notation to access properties, but note that you must
use bracket notation when a property name is saved in a variable. For example,
if you want to get the `NAME_LONG` value of "Zimbabwe", you could write
`d.properties.NAME_LONG`.

The first goal in the callback function is to get the population value for the
country since that's what the fill color is based on. You need two pieces of
information for this. First, you need to retrieve the `ADM0_A3` value from the
data object to get the unique 3-letter country code - "ZWE" in the code example.
Next, you use that code as the key in the `popMap` object to get the population
figure (`popMap["ZWE"]`).

Using the `const` keyword, declare a variable name `pop`. Next, retrieve the 3-
letter country code from the GeoJSON data - it's under the `properties` key then
under the `ADM0_A3` key. Use this value as the key to retrieve the population
number from your `popMap` object. You can do this in one line of code.
*/
