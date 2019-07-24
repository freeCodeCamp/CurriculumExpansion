const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')

/*
  When you appended the `svg` element, it became the "selected element". So any functions you add after it will be used on the `svg` element. 

  `attr` is another function used to set attributes of the selected element. You need to pass it the attribute you want to set, and the value you want to give it. Here's an example of how to chain `attr` to a selected element:
  ```
  const variableName = d3.select('element')
    .append('element')
    .attr('attribute', 'value')
  ```
  Chain the `attr` function to the `svg` that sets the `width` as the `svgWidth` variable you created earlier.
  When using a variable as one of the arguments, you do not need to put it in any kind of quotations.
*/
