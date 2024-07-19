const annualIncome = parseFloat(prompt('Enter your annual income:'));

let creditScore;

// calculate the credit score based on the annual income
/*
>= 100,000 – 800 CS
>= 75,000 – 750 CS
>= 50,000 – 700 CS
>= 30,000 – 650 CS
> 30,000 – 600 CS
*/

// We should make campers log the credit score to the console first before getting it ready to be a part of the final message
if (annualIncome >= 100000) {
  creditScore = 800;
} else if (annualIncome >= 75000) {
  creditScore = 750;
} else if (annualIncome >= 50000) {
  creditScore = 700;
} else if (annualIncome >= 30000) {
  creditScore = 650;
} else {
  creditScore = 600;
}

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

// get what they're qualified for

/*
// let's get campers to log the loanMessage to the console first before constructing the qualification message

if (income >= minIncomeDuplex && creditScore >= minCreditScoreDuplex) {
  loanMessage = 'You qualify for: \n- Duplex loan\n- Car loan\n- Condo loan\n';
} else if (income >= minIncomeCondo && creditScore >= minCreditScoreCondo) {
  loanMessage = 'You qualify for: \n- Car loan\n- Condo loan\n';
} else if (income >= minIncomeCar && creditScore >= minCreditScoreCar) {
  loanMessage = 'You qualify for: \n- Car loan\n';
} else {
  loanMessage = 'You qualify for nothing';
}

console.log(loanMessage);
*/

let loanMessage = ''; // this will be a part of the qualification message, which in turn will be a part of the final message

if (
  annualIncome >= minIncomeForDuplex &&
  creditScore >= minCreditScoreForDuplex
) {
  loanMessage = '- Duplex loan\n- Car loan\n- Condo loan\n';
} else if (
  annualIncome >= minIncomeForCondo &&
  creditScore >= minCreditScoreForCondo
) {
  loanMessage = '- Car loan\n- Condo loan\n';
} else if (
  annualIncome >= minIncomeForCar &&
  creditScore >= minCreditScoreForCar
) {
  loanMessage = '- Car loan\n';
} else {
  loanMessage = '';
}

let qualificationMessage =
  'You qualify for the following loan(s):\n \n' + loanMessage;

if (qualificationMessage === 'You qualify for the following loan(s):\n \n') {
  qualificationMessage = 'You do not qualify for any loans.';
}

const finalMessage = `Your calculated credit score is ${creditScore}. So, ${qualificationMessage}`;

console.log(finalMessage);
