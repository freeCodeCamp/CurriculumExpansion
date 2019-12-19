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



});

/*
Every method that you chain after `.data(countries)` will apply to each item D3
found in the `countries` dataset. If you're curious, `countries` is an array
with 241 objects that have geometry data as well as some other properties like
the name of the country and it's unique 3-letter ID code.

You use D3's `enter()` method when you want D3 to create new elements based on
your dataset. D3 compares the selection (the elements on the page with the class
`countries`, which there are zero) to the number of items in the dataset (there
are 241), and then creates a placeholder new element as needed. After the `enter()`
method, you chain the `.append("element")` method, to tell D3 which type of
element to create. D3 will do this 241 times, once for each country.

As noted earlier, this is one part of a broader set of functionality to create/
update/remove DOM items based on dataset items. In D3, this is known as the
enter-update-exit methodology, since those are the names of the methods. Use
`.enter()` to create elements when there are more data points, `.update()` to
update elements when data change or are added, and `.exit()` to remove extra
items.

Chain D3's `enter()` method after the `.data()` one, then chain the `.append()`
method to that. Pass `.append()` the `"path"` argument to tell D3 you want a
`path` element created for each country.
*/
