A lightbox displays a larger version of an image when clicked and shadows the rest of the page. This project will create a lightbox gallery that displays full-size images when a thumbnail is clicked. For each image, two versions are provided: a thumbnail and a full-size image. The full-size image is the same as the thumbnail, but without the `-thumbnail` suffix.

1. You should have a `div` with a class of `gallery` within your `body`.
2. Within the `.gallery` element, you should have three image thumbnails, each with a class of `gallery-item`. You should use the following links for thumbnail images: 
<!-- would be replaced by cdn -->

   - `./images/stonehenge-thumbnail.jpg`
   - `./images/storm-thumbnail.jpg`
   - `./images/trees-thumbnail.jpg`

3. You should have a `div` with a class of `lightbox` within your `body`.
4. You should have a `span` with an `id` of `close` within your `.lightbox` element. You can use `&times;` as its text if you want.
5. You should have a `img` with an `id` of `lightbox-image` within your `.lightbox` element.
6. Your `.lightbox` element should cover the entire viewport, have a semi-transparent background, and center its content. Initially, its `display` property should be set to `none` to hide it.
7. When you click one of your `.gallery-item` elements, the `.lightbox` element’s `display` property should be set to `flex` to make it, and the two elements within it, visible.
8. When you click one of your `.gallery-item` elements, the `#lightbox-image` element’s `src` should be set to a full-size version of the image clicked by removing `-thumbnail` from the image’s `src` attribute. The full-size images are located at the following links:
<!-- would be replaced by cdn -->
   - `./images/stonehenge.jpg`
   - `./images/storm.jpg`
   - `./images/trees.jpg`

9. When your `.lightbox` element is visible and you click the `.close` button or the `.lightbox` element, the `.lightbox` elements `display` should be set back to `none`.
10. You should use separate functions `closeLightbox` and `openLightbox` to handle the opening and closing of the lightbox.

**Note:** Be sure to link your stylesheet and the JavaScript file in your HTML.
