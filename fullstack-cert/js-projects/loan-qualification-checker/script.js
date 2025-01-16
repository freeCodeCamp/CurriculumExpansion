const annualIncome = parseFloat(prompt('Enter your annual income:'));
const creditScore = parseFloat(prompt('Enter your credit score:'));

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

// get what they're qualified for

/*
// let's get campers to log the loanMessage to the console first before constructing the qualification message

// We can also get them to log the income or credit score they enter to the console within the if block before showing them they can combine conditions. 

if (income >= minIncomeDuplex && creditScore >= minCreditScoreDuplex) {
  loanMessage = 'You qualify for: \n- Duplex loan\n- Car loan\n- Condo loan\n';
} else if (income >= minIncomeCondo && creditScore >= minCreditScoreCondo) {
  loanMessage = 'You qualify for: \n- Car loan\n- Condo loan\n';
} else if (income >= minIncomeCar && creditScore >= minCreditScoreCar) {
  loanMessage = 'You qualify for: \n- Car loan\n';
} else {
  loanMessage = 'You do not qualify for any loans.';
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

const finalMessage = `Your credit score is ${creditScore}. So, ${qualificationMessage}`;

console.log(finalMessage);
