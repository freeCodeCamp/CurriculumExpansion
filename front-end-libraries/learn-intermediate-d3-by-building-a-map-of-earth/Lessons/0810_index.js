// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;
const scale = svgWidth / (2 * Math.PI);
const format = d3.format(",");

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

  // Tooltip setup
  const tooltip = d3.select("#tooltip")
      .style("display", "none")
      .classed("tooltip", true);

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter().append("path")
      .attr("class", "countries")
      .attr("d", path)
      .style("stroke-width", 0.5)
      .style("opacity", 0.75)
      .style("fill", d => {
        const pop = popMap[d.properties[idCode]];
        if (pop) {
          return color(pop);
        } else {
          return "gray"
        }
      })
      .on("mouseover", function(d) {
        tooltip.transition()
          .style("display", "inline")
          .style("opacity", .9);

        // Change the style of the selected country
        d3.select(this)
          .style("opacity", 1)
          .style("stroke-width", 2);
      })
      .on("mousemove", function(d) {



      })

});

/*
The first step in the callback function is to get the population number, since
it's going to be one of the pieces of information displayed to a user in the
tooltip box.

This will be very similar to what you did in the callback function for
`fill`, with one catch. Since some population values are `undefined`, you'll
need to handle that case and set the variable to "NA". You're placing this value
into HTML on the page, so this makes it something a human can easily understand.

Using the `const` keyword, declare a variable named `pop2`. If the population
value of the country exists, set the variable to `format(populationValue)`, and
if it doesn't exist, set the variable to `"NA"`.

Hint: this is a good use case for the ternary operator:

`const example = condition ? valueIfTrue : valueIfFalse;`
*/
