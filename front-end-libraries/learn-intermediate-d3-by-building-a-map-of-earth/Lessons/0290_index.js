// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;



/*
D3 provides a useful `.scale()` method that you can chain to the Mercator projection,
which scales the map larger or smaller when it first loads. You pass a number into
the method, and this "scale factor" corresponds to the distance between projected
points. In other words, the larger the value, the more "zoomed in" the map appears.

The default value for the Mercator projection is 150, which leaves the map "cut
off' with extra ocean on the left and right. Instead, you're going to use a formula
based on the `svgWidth` to fill the entire width of your `svg`.

Using the `const` keyword, declare a variable named `scale` and set it to the
`svgWidth` divided by `(2 * Math.PI)`.
*/


const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const projection = d3.geoMercator()

