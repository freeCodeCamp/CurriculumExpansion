A lightbox displays a larger version of an image when clicked and shadows the rest of the page. This project will create a lightbox gallery that displays full-size images when a thumbnail is clicked.

1. You should have an `h1` element with the text "Museum Gallery".
1. You should have a `div` element with the class `gallery` that contains at least three `img` elements
1. The `img` elements should have the class `gallery-item` and the `src` attribute set to the paths `./images/stonehenge-thumbnail.jpg`, `./images/storm-thumbnail.jpg`, and `./images/trees-thumbnail.jpg` respectively for thumbnails.
1. You should have a `div` element with the class `lightbox` that contains:
   - A `span` element with the ID `close` and the class `close` that serves as a close button. You can use the `&times;` character as the close button icon.
   - An `img` element with the ID `lightbox-image` and an empty `src` attribute that will contain the full-size image when displayed.
1. The `.lightbox` class should cover the entire viewport with a semi-transparent background and center the lightbox content. Initially, its display property should be set to `none` to hide it.
1. The `.close` class should position the close button in the top-right corner of the lightbox and make it clickable.
1. Select all the images with the class `gallery-item` and store them in a variable named `galleryItems`.
1. Select the div with the id `lightbox` and store it in a variable named `lightbox`.
1. Select the lightbox image with the id `lightbox-image` and store it in a variable named `lightboxImage`.
1. Select the span with the id `close` and store it in a variable named `closeButton`.
1. Create a function named `openLightbox` that:
   - Takes an event object `src` as a parameter.
   - Retrieves the `src` attribute of the clicked image.
   - Sets the `display` property of the `lightbox` element to `"flex"` to make it visible.
1. Create a function named `closeLightbox` that:
   - Sets the `display` property of the `lightbox` element to `"none"` to hide it.
1. Add a `click` event listener to the `close` button that calls the `closeLightbox` function when clicked.
1. Add a click event listener to the `lightbox` element that calls the `closeLightbox` function when clicked outside the full-size image.
1. Add a `click` event listener to each `gallery-item` using a`forEach` loop that calls the `openLightbox` function when clicked.
1. In the `openLightbox` function, set the `src` attribute of the `lightbox-image` element to the full-size image URL by removing the `-thumbnail` suffix from the clicked image's `src` attribute.
