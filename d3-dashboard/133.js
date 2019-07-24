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
  .attr('transform', `translate(${margin}, 0)`)

/*
  `style` is a function similar to `attr` but is more for setting CSS styles rather than element attributes. Add a `style` function to the `g` selection that sets the `font` to `10px verdana`.
*/
