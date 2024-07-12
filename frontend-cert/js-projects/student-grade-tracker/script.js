const students = [];

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

const student4 = {
  name: 'Vivian',
  averageScore: null,
  grade: '',
};

students.push(student1, student2, student3, student4);

console.log(students);

students.pop(); // remove the last student so three are two left to work with

let student1TotalScore =
  student1.scores[0] + student1.scores[1] + student1.scores[2];

console.log(student1TotalScore);
// repeat for the two other students

let student1AverageScore = student1TotalScore / student1.scores.length;
console.log(student1AverageScore);

// round the average scpre to two decmal places
let student1RoundedAvg = Math.floor(student1AverageScore * 100) / 100;
console.log(student1RoundedAvg);

// add the average score to the object
student1.averageScore = student1RoundedAvg;
console.log(student1); //average score should not be null anymore
// repeat for the remaining 2 students

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
if (student1.averageScore >= 90 && student1.averageScore <= 100) {
  student1.grade = 'A';
} else if (student1.averageScore >= 80 && student1.averageScore < 90) {
  student1.grade = 'B';
} else if (student1.averageScore >= 70 && student1.averageScore < 80) {
  student1.grade = 'C';
} else if (student1.averageScore >= 60 && student1.averageScore < 70) {
  student1.grade = 'D';
} else if (student1.averageScore >= 50 && student1.averageScore < 60) {
  student1.grade = 'E';
} else if (student1.averageScore < 50) {
  student1.grade = 'F';
} else {
  student1.grade = 'Invalid score';
}

console.log('Student1 Grade:', student1.grade);
console.log(student1); // grade should not be an empty string anymore

// output student name and grade with concatenation
console.log(
  'Student1, with the name ' +
    student1.name +
    ' has an average score of ' +
    student1.averageScore +
    ' with the grade ' +
    student1.grade +
    '.'
);

// With template literals
console.log(
  `Student1, with the name ${student1.name} has an average score of ${student1.averageScore} with the grade ${student1.grade}.`
);

// reoeat for the remaining 2 students

console.log(students); // at this point, all the objects in the students array should have a value for all fields
