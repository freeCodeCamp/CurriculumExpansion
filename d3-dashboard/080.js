const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')

/*
  Your dashboard element is now selected, d3 has bunch of other functiona to use with a selected element. One of them is `append`; it is used to add an element to the selected element. Chain the `append` function to your selection use it to add an `svg` element. Here's an example of how that might be done:
  ```
  const variableName = d3.select('selectedElement')
    .append('elementToAdd')
  ```
*/
