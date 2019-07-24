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

const xAxis = d3.axisBottom(xScale)

lineGraph.append('g')
  .call(yAxis)

/*
  After all that work, something is finally displayed on the graph... it's just a line, but it's something. Really, it's the y-axis, and the numbers are just hidded on the left. Move the axis to the right by chaining the `attr` function to the `g` selection. Use the function to set the `transform` to `translate(${margin}, 0)`. Use a template literal (backticks) to set the value.
*/
