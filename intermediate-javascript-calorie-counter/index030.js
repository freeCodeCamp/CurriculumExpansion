document.getElementById('calorie-form');

/*Now we need to specify what should be done with the form when it is submitted (i.e. the user clicks the Calculate button).  

Forms have an `onsubmit` event property that you can register an event handler to.
An event handler is simply a function that you want executed when the form is submitted.

For example, in `document.getElementById('my-form').onsubmit = processForm;`, the function `processForm` will run when the form is submitted.

Assign an event handler function named `calculate` to the  `onsubmit` event of your form . You will create the `calculate` function later. */
