const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])
  .range([svgHeight - margin, margin]);

const xScale = d3.scaleLinear()
  .domain([2011, 2019])
  .range([margin, svgWidth - margin]);

const yAxis = d3.axisLeft(yScale)

/*
  Create a new `const` variable named `xAxis` and set the value equal to `d3.axisBottom(xScale)`. This will create another axis for the bottom of the graph using the information from `xScale`. Although the axes do not display yet, they have the information they need to display correctly.
*/
