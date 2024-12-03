For this lab, you have been provided with all the HTML and CSS. You will use JavaScript to validate the complaint form.

1. When the form is submitted, you should ensure that `#full-name` is not empty.
1. When the form is submitted, you should ensure that `#email` is a valid email address format.
1. When the form is submitted, you should ensure that `#order-no` is a sequence of ten numbers starting with `2024`.
1. When the form is submitted, you should ensure that `#product-code` follows the pattern `XX##-X###-XX#`, where `X` represents either a lowercase letter or an uppercase letter and `#` represents a number.
1. When the form is submitted, you should ensure that `#quantity` is a positive integer.
1. When the form is submitted, you should ensure that at least one checkbox from `#complaints-group` is checked.
1. When the form is submitted, you should ensure that `#complaint-description` contains at least twenty characters if the `Other` checkbox is checked.
1. When the form is submitted, you should ensure that a radio button from `#solutions-group` is selected.
1. When the form is submitted, you should ensure that `#solution-description` contains at least twenty characters if the `Other` radio button is selected.
1. Once a form field is filled with a valid value, you should set its border color to `green`. In case of checkbox and radio button groups, you should set the border color of the parent `fieldset`.
1. Once a form field is filled with an invalid value, you should set its border color to `red`. In case of checkbox and radio button groups, you should set the border color of the parent `fieldset`.
1. When you click the submit button, if the form has any invalid field, you should set the inner text of `#message-box` to `Please, fill out the required fields correctly before submitting.`
1. When you click the submit button, if the form has any invalid field, each invalid field should be highlighted by setting the border color of each invalid input, textarea or fieldset (in case of checkbox and radio button groups) to `red`.
1. When each form field is valid, you should reset the inner text of `#message-box` to an empty string.
1. When you click the submit button, if the form is filled correctly, you should display an alert saying `Form successfully submitted.`
