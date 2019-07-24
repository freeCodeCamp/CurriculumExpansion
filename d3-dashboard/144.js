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

/*
  Use another `style` function to set the `text-anchor` to `end`. This will change the spot that each text element rotates around to the end of the element.
  Note that all these style properties you are setting could just as easily be set in the CSS file using standard CSS. But since this is a d3 project, you will stick to using the `style` function.
*/
