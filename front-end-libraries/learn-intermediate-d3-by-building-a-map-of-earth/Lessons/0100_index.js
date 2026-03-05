// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")



/*
The last step to create an `svg` element is to assign `width` and `height` attributes
to it. D3 has an `.attr()` method for this, and it takes two arguments. The first
argument is the name of the attribute as a string and the second argument is the
value for it.

Chain two `attr` methods right after the `append` method. The first should add a
`"width"` attribute with the value set to your `svgWidth` variable. The second
should add a `"height"` attribute with the value set to your `svgHeight` variable.

Since there isn't a unit specified with these values, D3 will interpret them as
pixels by default.
*/
