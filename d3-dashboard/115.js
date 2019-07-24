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

/*
  The `range` for this scale will go from the left of your graph to the right. Add the `range` function, and pass it an array with the values: `margin` and `svgWidth - margin`. For some clarity, the margin will be where labels and axes go, which is why the margin area is not included in the range.
*/
