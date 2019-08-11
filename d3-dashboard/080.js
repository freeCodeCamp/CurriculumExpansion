const svgMargin = 60,
  svgWidth = 700,
  svgHeight = 500,
  twitterColor = '#7cd9d1',
  tumblrColor = '#f6dd71',
  instagramColor = '#fd9b98';

const lineGraph = d3.select('.dashboard')


  /*
    Your dashboard element is now "selected", D3 has bunch of other functions to use with a selection. One of them is `append`; it is used to add an element. Chain the `append` function to your selection and use it to add an `svg` element. Here's an example of how that might be done:

    ```
    const variableName = d3.select('selectedElement')
      .append('elementToAdd')
    ```

  */
