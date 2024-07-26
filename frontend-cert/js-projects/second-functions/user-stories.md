1. You should define a function named `askQuestion` with a `question` parameter. The function should return a prompt with `question` as its parameter.

2. You should define a function named `checkAnswer` with two parameters: `userAnswer` and `correctAnswer`. The fucntion should return the comparison of `userAnswer.toLowerCase()` and `correctAnswer.toLowerCase()`.

3. You should define an arrow function named `runQuiz`. Step 4-7 should be created within the `runQuiz` function.

4. You should create an array named `questions`. The array should have objects with `question` and `answer` properties. For example: `{ question: "What is the capital of France?", answer: "Paris" }`, `{ question: "What is 2 + 2?", answer: "4" },`, and so on. Create as many objects as you want.

5. You should create a `score` variable with a value of `0`.

6. You should use a `forEach` method to iterate over each question in the `questions` array. In the `forEach` method, do these:

    - Create a `const` variable named `userAnswer` and assign the `askQuestion` function to it. The current question should be the function's parameter.
    - Create an `if` statement and use the `checkAnswer` function as its condition. The `checkAnswer` function should have two parameters: `userAnswer` and the current answer.
    - If the answer is correct, log `Correct!` to the console and increment `score` by 1.
    - If the answer is wrong, create an `else` statement that tells the user their answer is wrong.

7. You should log the user's total score to the console.

8. You should call the `runQuiz` function.