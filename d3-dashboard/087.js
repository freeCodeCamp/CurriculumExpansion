const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)

/*
  Chain another `attr` function to the `svg`; use it to set the `height` as the `svgHeight` variable you created earlier.
*/
