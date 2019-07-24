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

/*
  Now that you have some scales, you can create some axes using those scales. Create a new `const` variables named `yAxis` and set it equal to `d3.axisLeft(yScale)`. This will create an axis for the left of the graph (the y-axis); it uses the information from the `yScale` variable to build the axis.
*/
