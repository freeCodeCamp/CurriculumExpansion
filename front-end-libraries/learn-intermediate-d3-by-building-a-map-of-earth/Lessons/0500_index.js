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



});

/*
Finally, all the pieces are in place to draw the map. In an earlier lesson, you
appended a `g` element (for "group") to the SVG to hold the countries, which is
stored in the constant `g`. You'll use that selection here with D3's `selectAll()`
method to grab all the map's countries by their class, which will be `"countries"`.

You may be wondering, 'but there aren't any countries on the map yet, why am I
selecting them?' And you're right - the code returns an empty selection. But this
and the next few lessons will get to the heart of how D3 works to create data
visualizations.

The general idea is that you select SVG shapes or elements and feed D3 the data
by binding it to the elements. Then, based on the items in the dataset, D3
determines how many shapes/elements to create and put on the page to generate the
data visualization. This is one part of a broader create/update/remove sequence
that D3 uses to match data to elements representing it in the DOM.

Here, you're first selecting elements with the class name `countries` - these
will be `path` elements that form the outline of each country. Next you'll bind
the geographic data (stored in the `countries` variable you created last lesson)
to these elements. Then D3 compares the number of `paths` on the page (which is
zero) to how many items are in the dataset, determines it needs a new `path` for
each item, creates and appends it to the page.

Let's get started! Using your `g` variable, chain the `selectAll()` statement to
grab all elements with the class name `countries`. Recall that D3 uses CSS
selector syntax, so class names start with a period.
*/
