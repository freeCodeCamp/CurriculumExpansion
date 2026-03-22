// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries

const mapPath =
  "https://cdn.freecodecamp.org/curriculum/d3-world-pop-map-2025/natural-Earth-50-TopoJSON.json";

// 2025 world population data. Source: https://databank.worldbank.org
const popPath =
  "https://cdn.freecodecamp.org/curriculum/d3-world-pop-map-2025/world-population.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;
const scale = svgWidth / (2 * Math.PI);
const format = d3.format(",");

// ISO 3166-1 Alpha 3 country code identifier
const idCode = "ADM0_A3";

const svg = d3
  .select("#map")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const projection = d3
  .geoMercator()
  .scale(scale)
  .translate([svgWidth / 2, svgHeight / 2])
  .center([0, 20]);

const path = d3.geoPath().projection(projection);

// Create a group to hold the countries
const g = svg.append("g");

// Create requests to retrieve JSON topography data and CSV population data
const getJSONData = d3.json(mapPath);
const getCSVData = d3.csv(popPath);

Promise.all([getJSONData, getCSVData]).then(function (values) {
  const json = values[0];
  const population = values[1];

  // Find the max and min population values in the data to better understand it
  const popArray = population.map((d) => +d.Population);
  const extent = d3.extent(popArray);

  // Create a scale to map population value to a color
  const color = d3
    .scaleThreshold()
    .domain([
      500000, 5000000, 10000000, 25000000, 50000000, 100000000, 1000000000,
    ])
    .range(d3.schemeYlOrRd[8]);

  // Create an object that maps country ID to population
  let popMap = {};
  population.forEach((d) => {
    popMap[d.ID] = +d.Population;
  });

  const countries = topojson.feature(json, json.objects.countries).features;

  // Tooltip setup
  const tooltip = d3
    .select("#tooltip")
    .style("display", "none")
    .classed("tooltip", true);

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter()
    .append("path")
    .attr("class", "countries")
    .attr("d", path)
    // .style("stroke", "white")  // Moved to CSS
    .style("stroke-width", 0.5)
    .style("opacity", 0.75)
    .style("fill", (d) => {
      const pop = popMap[d.properties[idCode]];

      if (pop) {
        return color(pop);
      } else {
        return "gray";
      }
    })
    .on("mouseover", function (d, countries) {
      tooltip.transition().style("display", "inline").style("opacity", 0.9);

      // Change the style of the selected country
      d3.select(this).style("opacity", 1).style("stroke-width", 2);
    })
    .on("mousemove", function (d, countries) {
      const pop2 = popMap[countries.properties[idCode]]
        ? format(popMap[countries.properties[idCode]])
        : "NA";

      // Create HTML string with country name and population info
      let dataPoint =
        "<div>" +
        "<strong><span class='label'>Country: </span></strong>" +
        countries.properties.NAME +
        "<br />" +
        "<strong><span class='label'>Population: </span></strong>" +
        pop2 +
        "</div>";

      tooltip
        .html(dataPoint)
        .style("left", d.layerX + 18 + "px")
        .style("top", d.layerY + 18 + "px");
    })
    .on("mouseout", function (d, countries) {
      // Fade tooltip when mouse leaves
      tooltip.transition().style("display", "none").style("opacity", 0);

      // Revert country to original style
      d3.select(this).style("opacity", 0.75).style("stroke-width", 0.5);
    });

  // Add map pan and zoom behavior
  const pad = 140;

  function zoomed(event) {
    g.attr("transform", d3.event.transform);
  }

  svg.call(
    d3
      .zoom()
      .scaleExtent([1, 8])
      .translateExtent([
        [0, -pad],
        [svgWidth, svgHeight + pad],
      ])
      .on("zoom", zoomed),
  );

  // Add legend to show population color thresholds
  const w = svgWidth / 2 - 4;
  const x_0 = svgWidth / 2;
  const y_0 = svgHeight - 120;
  const length = color.range().length;

  // Create a group to hold the legend
  const legend = svg
    .append("g")
    .attr("transform", "translate(" + x_0 + ", " + y_0 + ")");

  // Create a linear scale to help position legend colorblocks
  const x = d3
    .scaleLinear()
    .domain([1, length - 1])
    .rangeRound([w / length, (w * (length - 1)) / length]);

  // Create rectangles for each color bar
  legend
    .selectAll("rect")
    .data(color.range())
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("width", w / length)
    .attr("height", 10)
    .attr("fill", (d) => d);

  // Add legend title
  legend
    .append("text")
    .attr("y", -10)
    .attr("fill", "black")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text("Population Thresholds");

  // Add tick marks with population values under color bars
  legend
    .call(
      d3
        .axisBottom(x)
        .tickSize(15)
        .ticks(length - 1)
        .tickFormat((i) => format(color.domain()[i - 1])),
    )
    .select(".domain")
    .remove();
});
