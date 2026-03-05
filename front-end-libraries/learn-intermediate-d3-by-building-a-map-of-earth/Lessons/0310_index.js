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



/*
D3 has a `.translate()` method, which is used to set a projection's "translation
offset". It takes an array of width and height pixel values for where on your
`svg` to place the center of the map (the 0° longitude, 0° latitude
point).

The default value assumes an  `svg` area of 960x500, so the default argument is
`[480, 250]`. You'll need to adjust this since you're using different dimensions.

Chain the `.translate()` method to the end of your projection and pass it an
array. The first value is `svgWidth` divided by 2 and the second value is
`svgHeight` divided by 2. This places the center of the map exactly in the middle
of your `svg`.
*/
