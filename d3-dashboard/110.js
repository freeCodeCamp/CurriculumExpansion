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

/*
  The "year" values of your data set will be used for the x-scale. Chain the `domain` function to `xScale` and pass it an array with `2011` and `2019` as values, since those are the years of the sample data.
*/
