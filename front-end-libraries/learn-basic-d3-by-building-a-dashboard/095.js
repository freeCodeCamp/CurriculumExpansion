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


  /*
    D3 has a bunch of functions for working with scales, just like it does for selections. One of them is `domain`; it takes an array that is used to describe the highest and lowest values of the data for this scale. After a quick look at the `data.js` file, the values of the "followers" go from about 0 to 5000. Chain the `domain` function to the `yScale` and pass it the array `[0, 5000]`. Here's an example:

    ```
    const myScale = d3.scaleLinear()
      .domain([100, 1000])
    ```

  */
