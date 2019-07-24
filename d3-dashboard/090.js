const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

/*
  Your line graph needs some scales so it knows how to translate the data into visual distances. Create a new `const` variable named `yScale`, and set the value to `d3.scaleLinear()`. This will be the vertical or "y" scale.
*/
