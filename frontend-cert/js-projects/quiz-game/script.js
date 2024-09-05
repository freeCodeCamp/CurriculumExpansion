const questions = [
    {
        category: "science",
        question: "What is the chemical symbol for potassium?",
        choices: ["P", "K", "Pt"],
        answer: "K"
    },
    {
        category: "science",
        question: "What is the unit of electrical resistance?",
        choices: ["Ohm", "Coulomb", "Sievert"],
        answer: "Ohm"
    },
    {
        category: "geography",
        question: "What is the capital city of Australia?",
        choices: ["Sidney", "Canberra", "Wellington"],
        answer: "Canberra"
    },
    {
        category: "literature",
        question: 'Who wrote "1984"?',
        choices: ["Ray Bradbury", "Aldous Huxley", "George Orwell"],
        answer: "George Orwell"
    },
    {
        category: "sport",
        question: "How many players are on a standard volleyball team?",
        choices: ["6", "7", "12"],
        answer: "6"
    }
]

function playQuiz() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    let chosenQuestion = questions[randomIndex];
    const answer = prompt(`${chosenQuestion.category.toUpperCase()}
${chosenQuestion.question}
${chosenQuestion.choices}`)
        if (answer === chosenQuestion.answer) {
            console.log("The answer is correct!");
        } else {
            console.log(`Wrong answer, the correct answer is: ${chosenQuestion.answer}`);
        }
}

