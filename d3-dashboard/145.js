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
  .style('font', '10px verdana');
  
lineGraph.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${svgHeight - margin})`)
  .selectAll('text')
  .attr('class', 'x-axis-label')
  .style('transform', 'translate(-12px, 0) rotate(-50deg)')
  .style('text-anchor', 'end')

/*
  Add two more `style` functions; one to set the `cursor` to `pointer`, and another to set the `font` to `10px verdana`.
*/
