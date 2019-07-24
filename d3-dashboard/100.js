const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])

/*
  Now that the scale has a domain, it needs to know how to map that data to display on the graph. The `range` function is used to do this. Since this is the y-scale, you want the `0` in your domain to be at the bottom of the graph, and the `5000` to be at the top. Chain the `range` function below the `domain` and pass it an array with `svgHeight - margin` and `margin` as the values. It might sound confusing right now, but it will become more clear as you progress through this project.
*/
