function drawDashboard(year) {
  d3.select('.dashboard').html('');
  const index = data.findIndex(d => d.year === year);
  
  const svgMargin = 60,
    svgWidth = 700,
    svgHeight = 500,
    twitterColor = '#7cd9d1',
    tumblrColor = '#f6dd71',
    instagramColor = '#fd9b98';


  const container = d3.select('.dashboard')
    .style('display', 'flex')
    .style('flex-direction', 'row')
    .style('gap', '40px');

  const lineGraph = container
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
    .style('font', d => d === year ? 'bold 10px verdana' : '10px verdana')
    .on('mouseover', (event, d) => drawDashboard(d));

  const twitterLine = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.followers.twitter));

  lineGraph.append('path')
    .datum(data)
    .attr('d', twitterLine)
    .attr('stroke', twitterColor)
    .attr('stroke-width', '3')
    .attr('fill', 'transparent');

  lineGraph.append('path')
    .datum(data)
    .attr('d', tumblrLine)
    .attr('stroke', tumblrColor)
    .attr('stroke-width', '3')
    .attr('fill', 'transparent');

    lineGraph.append('path')
    .datum(data)
    .attr('d', instagramLine)
    .attr('stroke', instagramColor)
    .attr('stroke-width', '3')
    .attr('fill', 'transparent');

  lineGraph.selectAll('twitter-circles')
    .data(data)
    .join('circle')
    .attr('class', 'twitter-circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.followers.twitter))
    .attr('r', 6)
    .attr('fill', d => d.year === year ? twitterColor : 'white')
    .attr('stroke', twitterColor)
    .style('cursor', 'pointer')
    .on('mouseover', (event, d) => drawDashboard(d.year));

  lineGraph.selectAll('tumblr-circles')
    .data(data)
    .join('circle')
    .attr('class', 'tumblr-circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.followers.tumblr))
    .attr('r', 6)
    .attr('fill', d => d.year === year ? tumblrColor : 'white')
    .attr('stroke', tumblrColor)
    .style('cursor', 'pointer')
    .on('mouseover', (event, d) => drawDashboard(d.year));

  lineGraph.selectAll('instagram-circles')
    .data(data)
    .join('circle')
    .attr('class', 'instagram-circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.followers.instagram))
    .attr('r', 6)
    .attr('fill', d => d.year === year ? instagramColor : 'white')
    .attr('stroke', instagramColor)
    .style('cursor', 'pointer')
    .on('mouseover', (event, d) => drawDashboard(d.year));

  const rightDashboard = container
    .append('div');
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('align-items', 'center');

  const pieGraph = rightDashboard.append('svg')
    .attr('width', 200)
    .attr('height', 200)

  const pieArc = d3.arc()
    .outerRadius(100)
    .innerRadius(0);

  const pieColors = d3.scaleOrdinal()
    .domain(Object.keys(data[index].followers))
    .range([twitterColor, tumblrColor, instagramColor]);

  const pie = d3.pie()
    .value(d => d.value);

  const pieData = Object.entries(data[index].followers).map(([key, value]) => ({key, value}));

  const pieSlices = pieGraph.selectAll('pieSlices')
    .data(pie(pieData))
    .join('g')
    .apattr('class', 'pie-slice')
    .attr('transform', 'translate(100, 100)');

  pieSlices.append('path')
    .attr('d', pieArc)
    .attr('fill', d => pieColors(d.data.key))
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
    
  pieGraphData.selectAll('pieSliceText')
    .data(pie(d3.entries(data[index].followers)))
    .enter()
    .append('text')
    .text(d => {
      const sum = d3.sum(pieData, d => d.value);
      const percent = d.data.value/sum;
      return `${ Math.round(percent*100) }%`;
    })
    .attr('transform', d => `translate(${pieArc.centroid(d)})`)
    .style('text-anchor', 'middle')
    .style('font', '10px verdana')
    .style ('fill', 'black');

  const legend = rightDashboard.append('table')
    .attr('width', 200)
    .attr('height', 120)
    .style('font', '12px verdana')
    .style('top', '30px');

  const legendTitle = legend.append('thead')
    .append('tr')
    .append('th')
    .text(`${year} followers`)
    .attr('colspan', 3)
    .style('text-align', 'center');

  const legendRows = legend.append('tbody')
    .selectAll('tr')
    .data(pieData)
    .join('tr');

  legendRows.append('td')
    .text(d => d.key)
    .attr('align', 'right')
    .style('padding-right', '10px');

  legendRows.append('td')
    .attr('align', 'center')
    .append('div')
    .style('width', '16px')
    .style('height', '16px')
    .style('background-color', d => pieColors(d.key))

  legendRows.append('td')
    .text(d => d.value)
    .attr('align', 'left');
    .style('padding-left', '10px');
}

drawDashboard(2020);
