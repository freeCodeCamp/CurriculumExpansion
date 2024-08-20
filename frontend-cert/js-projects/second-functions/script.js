function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
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
        const userAnswer = prompt(q.question);
        if (checkAnswer(userAnswer, q.answer)) {
            console.log(`Question: ${q.question}\nCorrect!`);
            score++;
        } else {
            console.log(`Question: ${q.question}\nWrong. The correct answer is ${q.answer}.`);
        }
    });

    console.log(`You scored ${score} out of ${questions.length}.`);
}

runQuiz();
