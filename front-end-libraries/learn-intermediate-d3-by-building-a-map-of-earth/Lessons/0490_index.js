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
  population.forEach(d => {
    popMap[d.ID] = +d.Population
  });



});

/*
It's time to put the TopoJSON library to work! An earlier lesson explained that
the geographic data we're using for our map is in a lightweight, specific format
of `JSON` called TopoJSON. The TopoJSON library converts this back to GeoJSON,
which D3 then uses those geographic feature sets to create the SVG `path` elements
to draw each country's boundary.

In other words, the TopoJSON library does all the hard work of the conversion and
data extraction process for you, so you won't have to manually create all those
`path` elements!

The library is available as `topojson` in your script. You'll chain the
`.feature()` method to this, then call the `.features` attribute.

The `feature()` method takes two parameters: 1) the TopoJSON data (which is
available in your script in the `json` variable), and 2) the part of the TopoJSON
object of where to find the metadata and arc data for each country (in dot
notation, this is `json.objects.countries`).

Using the `const` keyword, save these features in a variable named `countries`.
*/
