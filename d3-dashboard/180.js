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
  .ticks(6, '~s');

const xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format(''))
  .tickPadding(10);

lineGraph.append('g')
  .call(yAxis)
  .attr('transform', `translate(${svgMargin}, 0)`)
  .style('font', '10px verdana');

lineGraph.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
  .selectAll('text')
  .style('transform', 'translate(-12px, 0) rotate(-50deg)')
  .style('text-anchor', 'end')
  .style('cursor', 'pointer')
  .style('font', '10px verdana');

const twitterLine = d3.line()
  .x(d => xScale(d.year))

/*
  Add the `y` function to the line and pass it the function `d => yScale(d.followers.twitter)` similar to how you did for the `x` values.

  When you pass the `data` array to `twitterLine`, it will basically go through each object in the array and set the `x` and `y` values using these functions. If you were to log `d` to the console, you would see each object from the array. So `d.year` will be the `year` from each object.

  These functions use implicit returns; but if you were to add curly brackets and a return statement, you could put any functionality in there that you want, including `console.log` statements that can be useful for debugging.
*/
