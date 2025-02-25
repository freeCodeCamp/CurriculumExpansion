1. You should create a `Square` component that accepts two props: `value` and `onClick`.
2. Your `Square` component should return a `button` element with the class `square`.
3. The `button` element should display the `value` prop inside it.
4. The `Square` component should trigger the `onClick` function when the button is clicked.
5. You should create a `calculateWinner` function that accepts an array `squares` as a parameter and returns the winner if there is one.
6. Your `calculateWinner` function should check for winning lines using an array of indices for rows, columns, and diagonals, and return the value of the winner (`X` or `O`) if there is a match.
7. You should create and export a `Board` component.
8. Your `Board` component should use React's `useState` hook to keep track of the game state, including the `squares` array and whether it is player `X` or `O` turn.
9. Your `Board` component should call the `calculateWinner` function to check if there's a winner after each move.
10. Your `Board` component should render a status message that shows the current player or the winner, or indicate if there is a draw.
11. Your `Board` component should render a grid of `Square` components for the 3x3 Tic-Tac-Toe board.
12. You should create a `resetGame` function that resets the game state to its initial values when triggered.