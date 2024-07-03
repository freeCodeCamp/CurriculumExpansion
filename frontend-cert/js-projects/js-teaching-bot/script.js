// second workshop in JS section

// review log statements and basic string usage
console.log("Hi there!");

// review variables and assignment
const botName = "teacherBot";
const occupation = "teacher";

// teach string concatenation using the + operator
// console.log("My name is " + botName);
// console.log("I am an experienced " + occupation);
// then teach template literals and have them refactor the code

console.log(`My name is ${botName}.`);
console.log(`I am an experienced ${occupation}.`);

// review variables and assignment
const subject = "JavaScript";
const topic = "strings";

// review template literals

console.log(`Today, you will learn about ${topic} in ${subject}.`);

// review template literals
console.log(
  `Here is an example of using the length property on the word ${subject}.`
);

// teach length property

console.log(subject.length);

// review template literals
console.log(
  `Here is an example of using the length property on the word ${topic}.`
);

// review length property
console.log(topic.length);

// review template literals
console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

// teach bracket notation and retrieving characters from strings
console.log(subject[0]);

// review template literals
console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);

// review bracket notation and retrieving characters from strings
console.log(subject[1]);

// review template literals
console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

// teach retrieving the last letter
console.log(subject[subject.length - 1]);

// review const and initialization
const sentence = "Learning is fun.";

// review basic string usage
console.log(
  "Here are examples of finding the positions of substrings in the sentence."
);

// teach indexOf method
console.log(sentence.indexOf("Learning"));

// review indexOf method
console.log(sentence.indexOf("is"));
console.log(sentence.indexOf("fun"));

// talk about when substring is not found and how indexOf is case sensitive
console.log(sentence.indexOf("learning"));

// review basic string usage
console.log("I hope you enjoyed learning today.");
