You should create a form with fields for name, email, number of attendees, dietary preferences, and an option to indicate if you are bringing additional guests.

You should have a text input field where you would enter your name (mandatory).

You should have an email input field where you would enter your email address (mandatory). The form should validate the format to ensure it is a proper email.

You should have a number input field where you would enter the number of attendees in the form (mandatory), and the number should not be less than one.

You should have a text input field where you would enter your dietary preferences, and this information should be optional.

You should be able to check or uncheck a checkbox to indicate whether you are bringing additional guests.

You should have a `"Submit RSVP"` button and be able to submit the form by clicking it and the form should prevent the page from reloading upon submission.

You should see a confirmation message `"RSVP Submitted!"` displayed just below the form after submitting, followed by the details you provided (name, email, number of attendees, dietary preferences, and whether you are bringing additional guests).
Here is a sample message you should see after submitting the form:

```
RSVP Submitted!
Name: John Doe
Email: example@example.com
Number of attendees: 2
Dietary preferences: None
Bringing additional guests: Yes
```

You should not be able to submit the form if the required fields (name, email, and number of attendees) are not filled out, ensuring proper validation.

You should see the default message "None" if no dietary preferences are entered after submitting the form.