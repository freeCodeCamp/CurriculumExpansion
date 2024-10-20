# --description--

A mood board is a collage consisting of images and text. It is used to convey a general idea, goal or feeling about a particular topic.

In this lab, you will create a mood board using reusable React components. The CSS has already been provided for you.

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. The `mood-board-item` `div` should have its background color set to the `color` prop.
2. The `MoodBoardItem` component should render an `img` element with the `src` attribute set to the `image` prop.
3. The `MoodBoardItem` component should render an `h3` set to the `description` prop. It should have a `className` of `mood-board-text`.
4. You should define a `MoodBoard` component that:
    - Renders an `h1` with a `className` of `moodboard-heading` and the text `Destination MoodBoard`.
    - Used the `MoodBoardItem` component to render a `MoodBoardItem`. 
    - Each `MoodBoardItem` should have the following props:
        - `color`.
        - `image`.
        - `description`.
5. You should add atleast 3 `MoodBoardItem` components to the `MoodBoard` component.
