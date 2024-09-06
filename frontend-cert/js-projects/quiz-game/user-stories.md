1. You should create an array named `questions`.
1. The `questions` array should contain at least five objects, each having the keys `category`, `question`, `choices`, and `answer`.
1. The `category` key should have the value of a string representing a question category.
1. The `question` key should have the value of a string representing a question.
1. The `choices` key should have the value of an array containing three strings, which are alternative answers to the question.
1. The `answer` key should have the value of a string, representing the correct answer to the question. Also, the value of `answer` should be included in the `choices` array.
1. You should have a function named `getRandomQuestion` that returns a random question object from the `questions` array.
1. You should have a function named `getRandomComputerChoice` that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
1. You should have a function named `getResults` that takes the selected question object as its parameter and returns `The computer's choice is correct!` if the answer is correct. Otherwise, it returns `The computer's choice is wrong. The correct answer is: <correct-answer>`, where `<correct-answer>` is the value of the correct answer to the chosen question.