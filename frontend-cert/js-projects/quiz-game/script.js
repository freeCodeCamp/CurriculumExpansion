const questions = {
    science: [],
    geography: [],
    literature: []
};

const question1 = {
    question: "What is the chemical symbol for potassium?",
    choices: ["P", "K", "Pt"],
    answer: "K"
};

questions.science.push(question1);

const question2 = {
    question: "What is the unit of electrical resistance?",
    choices: ["Ohm", "Coulomb", "Sievert"],
    answer: "Ohm"
};

questions.science.push(question2);

const question3 = {
    question: "What is the capital city of Australia?",
    choices: ["Sidney", "Canberra", "Wellington"],
    answer: "Canberra"
};
questions.geography.push(question3);

const question4 = {
    question: 'Who wrote "1984"?',
    choices: ["Ray Bradbury", "Aldous Huxley", "George Orwell"],
    answer: "George Orwell"
};
questions.literature.push(question4);

const category = "science";
let chosenQuestion = questions[category].shift();

console.log(chosenQuestion.question);
console.log(chosenQuestion.choices);

const answer = "K";
if (answer === chosenQuestion.answer) {
    console.log("The answer is correct!");
} else {
    console.log(`Wrong answer, the correct answer is: ${chosenQuestion.answer}`);    
}

