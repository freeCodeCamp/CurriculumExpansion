const svgMargin = 60,
  svgWidth = 700,
  svgHeight = 500,
  twitterColor = '#7cd9d1',
  tumblrColor = '#f6dd71',
  instagramColor = '#fd9b98';

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])
  .range([svgHeight - svgMargin, svgMargin]);

const xScale = d3.scaleLinear()
  .domain([2012, 2020])
  .range([svgMargin, svgWidth - svgMargin]);

const yAxis = d3.axisLeft(yScale)

const xAxis = d3.axisBottom(xScale)

lineGraph.append('g')
  .call(yAxis)
  

  /*
    After all that work, something is finally displayed on the graph... it's just a line, but it's something. Really, it's the y-axis, and the numbers are just hidden on the left.
    
    Move the axis your `margin` to the right by chaining an `attr` function to the selection. Use it to set the `transform` to `translate(${svgMargin}, 0)`. Use a template literal (backticks) to set the value.
  */
