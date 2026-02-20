var globalData = [];
var currentYear = null;

d3.json('https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/curriculum/d3-dashboard-data/data.json')
  .then(function(data) {
    globalData = data;
    currentYear = data[data.length - 1].year;
    
    const dashboardNode = document.querySelector('.dashboard');
    resizeObserver.observe(dashboardNode);
  });

const resizeObserver = new ResizeObserver(() => {
  if (globalData.length > 0) {
    drawDashboard(currentYear, globalData);
  }
});

function drawDashboard(year, data) {
  currentYear = year; 
  const dashboard = d3.select('.dashboard');
  dashboard.html(''); 
  
  const index = data.findIndex(d => d.year === year);
  if (index === -1) return; 

  const containerWidth = dashboard.node().getBoundingClientRect().width;
  const isMobile = containerWidth < 800;
  
  const svgMargin = isMobile ? 60 : 60,
        svgWidth = isMobile ? containerWidth - 40 : (containerWidth * 0.70),
        svgHeight = isMobile ? 300 : 500,
        twitterColor = '#7cd9d1',
        tumblrColor = '#f6dd71',
        instagramColor = '#fd9b98';

  const container = dashboard
    .style('display', 'flex')
    .style('flex-direction', isMobile ? 'column' : 'row')
    .style('gap', isMobile ? '20px' : '20px')
    .style('padding', '20px') 
    .style('align-items', isMobile ? 'justify-content' : 'flex-center');

  // --- Line Graph ---
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

  // Axes logic
  lineGraph.append('g')
    .call(d3.axisLeft(yScale).ticks(6, '~s'))
    .attr('transform', `translate(${svgMargin}, 0)`)
    .style('font', '10px verdana');
  
  lineGraph.append('g')
    .call(d3.axisBottom(xScale).tickFormat(d3.format('d')))
    .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
    .selectAll('text')
    .style('transform', 'translate(-12px, 0) rotate(-50deg)')
    .style('text-anchor', 'end')
    .style('cursor', 'pointer')
    .style('font', d => d === year ? 'bold 10px verdana' : '10px verdana')
    .on('mouseover', (event, d) => drawDashboard(d, data));

  // Lines & Circles (Twitter, Tumblr, Instagram)
  const platforms = [
    { name: 'twitter', color: twitterColor },
    { name: 'tumblr', color: tumblrColor },
    { name: 'instagram', color: instagramColor }
  ];

  platforms.forEach(p => {
    const lineGenerator = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.followers[p.name]));

    lineGraph.append('path')
      .datum(data)
      .attr('d', lineGenerator)
      .attr('stroke', p.color)
      .attr('stroke-width', '3')
      .attr('fill', 'transparent');

    lineGraph.selectAll(`.${p.name}-circle`)
      .data(data)
      .join('circle')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.followers[p.name]))
      .attr('r', 6)
      .attr('fill', d => d.year === year ? p.color : 'white')
      .attr('stroke', p.color)
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => drawDashboard(d.year, data));
  });

  // --- Right Dashboard (Pie & Table) ---
  const rightDashboard = container
  .append('div')
  .attr('class', 'right-dashboard');


  const pieGraph = rightDashboard.append('svg')
    .attr('width', 200)
    .attr('height', 200);

  const pieArc = d3.arc().outerRadius(90).innerRadius(0);
  const pieData = Object.entries(data[index].followers).map(([key, value]) => ({key, value}));
  const pieColors = d3.scaleOrdinal().domain(pieData.map(d => d.key)).range([twitterColor, tumblrColor, instagramColor]);
  const pie = d3.pie().value(d => d.value);

  const pieSlices = pieGraph.selectAll('.pie-slice')
    .data(pie(pieData))
    .join('g')
    .attr('class', 'pie-slice')
    .attr('transform', 'translate(100, 100)');

  pieSlices.append('path')
    .attr('d', pieArc)
    .attr('fill', d => pieColors(d.data.key))
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
    
  pieSlices.append('text')
    .text(d => {
      const sum = d3.sum(pieData, d => d.value);
      return `${Math.round((d.data.value / sum) * 100)}%`;
    })
    .attr('transform', d => `translate(${pieArc.centroid(d)})`)
    .style('text-anchor', 'middle')
    .style('font', '10px verdana');

  // Legend Table
  const legend = rightDashboard.append('table')
    .style('width', '200px')
    .style('margin-top', '20px')
    .style('font', '12px verdana');

  legend.append('thead').append('tr').append('th')
    .text(`${year} followers`).attr('colspan', 3).style('text-align', 'center');

const columns = [
  { 
    content: d => d.key, 
    align: 'right', 
    type: 'text' 
  },
  { 
    content: d => pieColors(d.key), 
    align: 'center', 
    type: 'color' 
  },
  { 
    content: d => d.value.toLocaleString(), 
    align: 'left', 
    type: 'text' 
  }
];

const legendRows = legend.append('tbody')
  .selectAll('tr')
  .data(pieData)
  .join('tr');


const cells = legendRows.selectAll('td')
  .data(d => columns.map(col => ({ ...col, data: d })))
  .join('td')
  .attr('align', c => c.align)
  .style('padding', '5px');


cells.each(function(c) {
  const selection = d3.select(this);
  if (c.type === 'color') {
    selection.append('div')
      .style('width', '16px')
      .style('height', '16px')
      .style('display', 'inline-block') 
      .style('background-color', c.content(c.data));
  } else {
    selection.text(c.content(c.data));
  }
});
}