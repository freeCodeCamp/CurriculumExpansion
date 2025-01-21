**User Stories:**

1. Your page should contain a `div` with the class `newspaper-layout`.

2. The `.newspaper-layout` should include a `div` for the title with the class `title` to display the newspaper's name.

3. The `.newspaper-layout` should include a `div` with the class `feature-article` for the main news article.

4. There should be three smaller articles, each contained in a `div` with classes `small-article1`, `small-article2`, and `small-article3`.

5. Each of the smaller articles should include an `h3` element for the article title and a `p` element for the article content.

6. The `.newspaper-layout` should include a `div` with the class `secondary-article` for an additional news section.

7. The `.newspaper-layout` should include a `div` with the class `cover-image` to display an image that represents the newspaper's content.

8. Your layout should use CSS Grid with a `grid-template-areas` property to define the arrangement of sections:

   - The `.title` should span across the top row.
   - The `.feature-article` should span two columns in the second row, with the cover image in the third column.
   - The `.secondary-article` should span two columns in the third row, with the `.cover-image` in the third column.
   - The three small articles should appear in the fourth row.

9. The `.newspaper-layout` should have a `grid-template-columns` property that divides the space into three equal columns.

10. You should set the `.newspaper-layout`'s `grid-template-rows` property to `auto` for the first row, and divide the remaining space into equal parts for the other rows.

11. Add a gap between grid items and set the width of `.newspaper-layout` to 90% to take up most of the viewport width.

12. You should ensure that the image inside the `.cover-image` should fit within the designated space.
