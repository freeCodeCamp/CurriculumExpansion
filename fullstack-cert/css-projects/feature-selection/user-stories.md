# User Stories

1. Your page should have an `h1` element with the text `Feature Selection`.
2. Your page should have a `div` element with the class `feature-card-container`.
3. Your page should have six `label` elements each with the class `feature-card`.
4. Your six `label` elements should each have an `input` element of type `checkbox` in them.
5. Your six `label` elements should each have an `h4` element.

   - Your first `h4` element should have the text `Cloud Storage`.
   - Your second `h4` element should have the text `Dedicated Support`.
   - Your third `h4` element should have the text `Advanced Analytics`.
   - Your fourth `h4` element should have the text `Custom User Themes`.
   - Your fifth `h4` element should have the text `Multi-User Collab`.
   - Your sixth `h4` element should have the text `API Access`.

6. Your six `label` elements should each have a `p` element.

   - Your first `p` element should have the text `100 Gigabyte secure storage`.
   - Your second `p` element should have the text `24/7 customer help`.
   - Your third `p` element should have the text `Insights & reports`.
   - Your fourth `p` element should have the text `Personalized dashboard design`.
   - Your fifth `p` element should have the text `Team access and sharing`.
   - Your sixth `p` element should have the text `Integrate with your custom built tools`.

7. Your `body` element should have the following properties and values:

   - a `display` property of `flex`
   - a `justify-content` of `center`
   - an `align-items` of `center`
   - a `flex-direction` of `column`
   - a `height` of `100vh`.

8. Your `feature-card-container` class should have the following properties and values:

   - a `display` of `flex`
   - `flex-wrap` of `wrap`
   - a `gap` of `20px`
   - a `max-width` of `600px`
   - a `justify-content` of `center`.

9. Everything inside your `feature-card-container` element should have a `flex` property of `1 1 180px`.
10. Your `feature-card` element should be assigned the following properties and values:

    - a `border` of `2px solid #ccc`
    - a `border-radius` of `12px`
    - a `padding` of `20px`
    - a `text-align` of `center`
    - a `position` of `relative`
    - a `cursor` of `pointer`

11. The hover state of your `.feature-card` element should have a `border-color` of `#f1be32` and a `box-shadow` of `0 4px 12px rgba(255, 201, 53, 0.6)`.
12. The input type of checkbox inside each `.feature-card` element should have the following properties and values:

    - a `position` of `absolute`
    - a `top` of `15px`
    - a `right` of `15px`
    - a `width` of `24px`
    - a `height` of `24px`
    - a `cursor` of `pointer`

13. The `checked` state of each checkbox should have an `accent-color` set to `#f1be32`.
14. Each `h4` element inside the `.feature-card` element should have a `margin` of `10px 0 5px` and a `font-size` of `1.2rem`.
15. You should use a media query of max-width 600px to set the body height to auto for better responsiveness on smaller screens.
