You should have an `h1` element with the text `Real-Time Character Counter`.

You should have a `textarea` element with the `id` of `textInput`. It should have a `placeholder` attribute with the text `Type something...`.

There should be a `p` `element` with the `id` of `charCount`. It should initially contain the text `Character Count: 0/50`. This placeholder text should be replaced with the current count of characters in the `textarea` element.

You should attach an event listener to the `textInput` element that listens for the `input` event. 

Inside the event trigger function, you should get the value of the `textarea` element and store it in the variable `textInput`. You should also declare a variable `charCount` and set it equal to the length of the `textInput` variable.

Create a condition that checks if the current character count is greater than `50`. If it is, the user shouldn't be able to enter more characters. 

Get the character count display element by its ID and update the text to show the current character count using `innerHTML`.

If the character count is equal to `50`, the text should be displayed in `red`. 