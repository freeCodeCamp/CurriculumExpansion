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
  .ticks(6, '~s');
  
const xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format(''))
  .tickPadding(10);

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
  .style('cursor', 'pointer')
  .style('font', '10px verdana');

const twitterLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.twitter));

lineGraph.append('path')
  .attr('d', twitterLine(data))
  .attr('stroke', '#7cd9d1')
  .attr('stroke-width', '3')
  .attr('fill', 'transparent');

/*
  On a new line, create a new `const` variable named `tumblrLine` and set it equal to `d3.line()`.
*/
