// start with an empty array - campers will push objects into it later
const students = [];

/* Have campers create 3 objects. 
Walk them through the creation of the student1 object, then make them create the remaining two.
But working with more than 3 might make thigns too repetitious and redundant
*/

const student1 = {
  name: 'John',
  scores: [88, 90, 85],
  averageScore: null,
  grade: '',
};

const student2 = {
  name: 'Jane',
  scores: [79, 88, 90],
  averageScore: null,
  grade: '',
};

const student3 = {
  name: 'Zoe',
  scores: [95, 92, 98],
  averageScore: null,
  grade: '',
};

// introduce push here
students.push(student1, student2, student3);

console.log(students);

// Calculate grade with if/else
/*
Grading system
90 - 100: A
80 - 89: B
70 - 79: C
60 - 69: D
50 - 59: E
<50: F
*/

// Calculate the total score
function getTotalScore(scores) {
  return scores[0] + scores[1] + scores[2]; // Manually summing the scores
}

const student1TotalScore = getTotalScore(student1.scores);
console.log(`Student1 Total Score: ${student1TotalScore}`);

// Optional: make campers get the total score for the remaining students
const student2TotalScore = getTotalScore(student2.scores);
console.log(`Student2 Total Score: ${student2TotalScore}`);

const student3TotalScore = getTotalScore(student3.scores);
console.log(`Student3 Total Score: ${student3TotalScore}`);
console.log('\n');

function getAverageScore(scores) {
  const totalScore = getTotalScore(scores);
  return (totalScore / scores.length).toFixed(2);
}

const student1AverageScore = getAverageScore(student1.scores);
console.log(`Student 1 Average Score: ${student1AverageScore}`);

// Optional: make campers get the average score for the remaining students
const student2AverageScore = getAverageScore(student2.scores);
console.log(`Student 2 Average Score: ${student2AverageScore}`);

const student3AverageScore = getAverageScore(student3.scores);
console.log(`Student 3 Average Score: ${student3AverageScore}`);
console.log('\n');

function getGrade(averageScore) {
  if (averageScore >= 90 && averageScore <= 100) {
    return 'A';
  } else if (averageScore >= 80 && averageScore < 90) {
    return 'B';
  } else if (averageScore >= 70 && averageScore < 80) {
    return 'C';
  } else if (averageScore >= 60 && averageScore < 70) {
    return 'D';
  } else if (averageScore >= 50 && averageScore < 60) {
    return 'E';
  } else if (averageScore < 50) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}

// const student1Grade = getGrade(getAverageScore(student1.scores)); – this is one way to do it
const student1Grade = getGrade(student1AverageScore);
console.log(`Student 1 Grade: ${student1Grade}`);

// Optional: make campers get the grade for the remaining students
const student2Grade = getGrade(student2AverageScore);
console.log(`Student 2 Grade: ${student2Grade}`);

const student3Grade = getGrade(student3AverageScore);
console.log(`Student 3 Grade: ${student3Grade}`);
