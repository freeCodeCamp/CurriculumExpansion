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
  .style('font', '10px verdana')

const twitterLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.twitter));

lineGraph.append('path')
  .attr('d', twitterLine(data))
  .attr('stroke', twitterColor)
  .attr('stroke-width', 3)
  .attr('fill', 'transparent');

const tumblrLine = d3.line()
  .x(d => xScale(d.year))
  

  /*
    Set the `y` values for the `tumblrLine` by using a "`d` function" that returns your Tumblr followers for each data point.

    So you can see that the `x` values for each line will be the same, but the `y` values will use the data from the different platforms.
  */
