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

  const countries = topojson.feature(json, json.objects.countries).features;

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter().append("path")



});

/*
Now you have `path` elements ready to go for every country. The rest of the code
you chain to the `g` group will be applied to each country. You'll be adding a
class attribute, some dynamic styling, and an interactive tooltip that displays
the name and population of a country when the user hovers over it.

Since you used the class name `countries` in your selector code, it's important
to add that attribute! You used D3's `.attr()` method to add the `width` and
`height` attributes to the `svg` variable above. Chain that method here and pass
it `"class"` as the attribute, and `"countries"` as the value.

One thing to note is that for this visualization, you could have just written
`g.selectAll("path")` and that would have worked. We selected items on a class
name here as an example to show you how it works. If you were creating a more
complex visualization where you used the same element but for different things,
(for example, having `path` elements to draw each continent that you wanted to
behave and style independently), you would need a way to distinguish them from
each other. Selecting and assigning class names to each set is one way to do this.
*/
