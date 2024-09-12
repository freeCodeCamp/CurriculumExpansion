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

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(obj) {
    return computerChoice === obj.answer
        ? "The computer's choice is correct!"
        : `The computer's choice is wrong. The correct answer is: ${obj.answer}`;
}

const questionObj = getRandomQuestion();
const { question, choices } = questionObj;

console.log(question);
console.log(`Choices: ${choices}`);

const computerChoice = getRandomComputerChoice(choices);
console.log(`Computer chooses: ${computerChoice}`);

const results = getResults(questionObj);
console.log(results);
