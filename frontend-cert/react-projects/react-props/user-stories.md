# --description--

In this lab, you will create a mood board using reusable React components. The CSS has already been provided for you.

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `div` with the `id` of `root`.
2. You should have a `MoodBoardItem` component that uses props and renders a `div` with the `class` of `mood-board-item`.
3. The `mood-board-item` `div` should have its background color set to the `color` prop.
4. The `MoodBoardItem` component should render an `img` element with the `src` attribute set to the `image` prop.
5. The `MoodBoardItem` component should render an `h3` set to the `description` prop. It should have a `className` of `mood-board-text`.
6. You should define a `MoodBoard` component that:
    - Renders an `h1` with a `className` of `moodboard-heading` and the text `Destination MoodBoard`.
    - Used the `MoodBoardItem` component to render a `MoodBoardItem`. 
    - Each `MoodBoardItem` should have the following props:
        - `color`.
        - `image`.
        - `description`.
7. You should add atleast 3 `MoodBoardItem` components to the `MoodBoard` component.
8. You should finally render the `MoodBoard` component in the `root` div.