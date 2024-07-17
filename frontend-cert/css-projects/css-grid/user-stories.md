1. You should have a `div` element with the class `magazine-cover`.
1. Your `.magazine-cover` should have five `div` elements nested inside it.
1. Each nested `div` should have the classes `title`, `feature-article`, `small-article1`, `small-article2`, and `cover-image`.
1. Set the display property of the `.magazine-cover` to `grid`.
1. The `.magazine-cover` should have a `grid-template-areas` property of:
   ```
   "title title title"
   "feature-article feature-article cover-image"
   "small-article1 small-article2 cover-image"
   ```
1. The `.magazine-cover` should have a `grid-template-columns` property of `1fr 1fr 1fr`.
1. The `.magazine-cover` should have a `grid-template-rows` property of `auto 1fr 1fr`.
1. Add a `gap` of `10px` to the `.magazine-cover`.
1. Set the `background-color` of the `.magazine-cover` to `#fff`.
1. All the nested `div` elements should have a `grid-area` property that corresponds to the class name.
1. Add a `padding` of `10px` to all the nested `div` elements classes.
1. To all the nested `div` elements classes, add a `background-color` of `#1B1B32`, `#f9f9f9`, `#e9e9e9` and `#ddd` respectively.
1. You should add a `color` of `white` to the `.title` class and a `text-align` of `center`.
1. The `cover-image` class should have a `display` property of `flex`, a `justify-content` property of `center`, and an `align-items` property of `center`.
1. Add a `max-width` of `100%` and a height of `auto` to the `cover-image img` element.
