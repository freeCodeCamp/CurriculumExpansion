1. You should create an array named `questions`.
1. The `questions` array should contain at least five objects, each having the keys `category`, `question`, `choices`, and `answer`.
1. The `category` key should have the value of a string representing a question category.
1. The `question` key should have the value of a string representing a question.
1. The `choices` key should have the value of an array containing three strings, which are alternative answers to the question.
1. The `answer` key should have the value of a string, representing the correct answer to the question. Also, the value of `answer` should be included in the `choices` array.
1. You should have a function named `playQuiz` that selects a random question from the `questions` array.
1. Your `playQuiz` function should use the `prompt` method to display a message and get user input.
1. The message should be made of the `category` value of the selected question in uppercase, followed by the `question`, and the `choices`. These values should be dispayed on three separate lines.
1. If the answer given by the user is the correct answer, `playQuiz` should log `The answer is correct!` to the console. Otherwise, it should log `Wrong answer, the correct answer is: <correct-answer>`, where `<correct-answer>` is the value of the correct answer to the chosen question.