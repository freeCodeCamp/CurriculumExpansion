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


  
/*
  Your line graph needs some scales so it knows how to translate the data into visual distances.
  
  Create a new `const` named `yScale`, and set it equal to `d3.scaleLinear()`. This will create a linear scale for the vertical or "y" axis.
*/
