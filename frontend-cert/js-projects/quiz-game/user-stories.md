1. You should create an object named `questions` with three keys, `science`, `geography`, and `literature`, and the values of an empty array.
1. You should create at least four `question#` variables, where `#` is replaced by a number starting from `1`.
1. Each `question#` variable should be an object with the keys `question`, `choices`, and `answer`.
1. The `question` key should have the value of a string representing a question.
1. The `choices` key should have the value of an array containing three strings, which are alternative aswers to the question.
1. The `answer` key should have the value of a string, representing the correct answer to the question.
1. You should push each `question#` to the respective category inside the `questions` object.
1. Each category of the `questions` object should have at least one element.
1. You should declare a variable named `category` which has either the value of `"science"`, `"geography"`, or `"literature"`.
1. You should remove the first element from the `questions[category]` array and store it inside a variable named `chosenQuestion`.
1. You should log the value of the `question` key of `chosenQuestion` to the console.
1. You should log the value of the `choices` key of `chosenQuestion` to the console.
1. You should declare a variable named `answer`, which is a string.
1. You should create an `if` statement that checks if `answer` is the correct answer and logs the string `The answer is correct!` to the console.
1. You should write an `else` statement that logs the string `Wrong answer, the correct answer is: <correct-answer>`, where `<correct-answer>` is the value of the correct answer to the chosen question.