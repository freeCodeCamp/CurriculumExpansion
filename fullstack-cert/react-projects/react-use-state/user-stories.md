1. You should use the `useState` hook and destructure the two elements it returns: `bgColor` (the current state value) and `setBgColor` (the function used to update the `bgColor` state).
2. The background color of the page should initally be set to white using the `useState` hook.
3. The `#pick-color-btn` button should have the `onClick` property set to the `handleButtonClick` function.
4. The `#color-input` input should have the `onChange` property set to the `handleColorChange` function.
5. The `handleColorChange` function should set the background color of the page to the value of the `#color-input` input using the `setBgColor` function created by the `useState` hook.