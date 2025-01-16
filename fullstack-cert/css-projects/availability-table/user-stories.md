1. You should have a table with at least 3 columns and 5 rows, headings included.

1. Cells in the first column should contain time values and have the `class` of `time`.

1. All the other cells should have the `class` of `available-#`, where `#` is a number from `0` to `5` that specifies the number of available people at that time.

1. In your `root` selector, you should define CSS variables named `--color#`, where `#` is a number from `0` to `5`, and used them to give a background color to the corresponding `.available-#` elements.

1. In your `root` selector, you should define CSS variables named `--solid-border` and `--dashed-border`. You should use them to alternate the internal border of your table rows between solid and dashed borders.

1. You should have a `div` element with the `id` of `legend`. It should contain a `span` element with the text of `Availability` and a `div` element with the `id` of `legend-gradient`.

1. You should give the `#legend-gradient` element a linear gradient that change from `--color0` to `--color5`. Each color value should have two color-stops (expressed in percentage) to make the transition from one color to the following color a hard line.