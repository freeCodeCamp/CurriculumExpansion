function askQuestion(question) {
    return prompt(question);
}

function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
}

const runQuiz = () => {
    const questions = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the smallest prime number?", answer: "2" },
    ];

    let score = 0;

    questions.forEach((q) => {
        const userAnswer = askQuestion(q.question);
        if (checkAnswer(userAnswer, q.answer)) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Wrong. The correct answer is ${q.answer}.`);
        }
    });

    console.log(`You scored ${score} out of ${questions.length}.`);
}

runQuiz();
