let sentence = prompt('Enter a sentence to analyze:');

// Initialize stat variables to 0
let wordCount = 0;
let vowelCount = 0;
let consonantCount = 0;
let punctuationCount = 0;

// Define varaibles for vowels, consonants, and possible punctuation marks from the sentence
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const punctuations = '.,!?;:-()[]{}"\'–';

// analyze the sentence with the good old for loop
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];

  // Count vowels and consonants
  if (vowels.indexOf(char) !== -1) {
    vowelCount++;
  } else if (consonants.indexOf(char) !== -1) {
    consonantCount++;
  }

  // Count punctuation marks
  if (punctuations.indexOf(char) !== -1) {
    punctuationCount++;
  }
}

// Use while loop to count words to show campers how while loop works. WE could use the existing for loop too.
let index = 0;
while (index < sentence.length) {
  if (sentence[index] === ' ' || index === sentence.length - 1) {
    wordCount++;
  }
  index++;
}

// Make campers refactor the whole thing to use a cleaner for...of loop
/*
for (const char of sentence) {
  // Count vowels and consonants
  if (vowels.indexOf(char) !== -1) {
    vowelCount++;
  } else if (consonants.indexOf(char) !== -1) {
    consonantCount++;
  }

  // Count punctuation
  if (punctuations.indexOf(char) !== -1) {
    punctuationCount++;
  }

  if (char === ' ' || i === sentence.length - 1) {
    wordCount++;
  }
}
*/

// Results
// We could get fancy by making the sentence introducing the results bigger
// console.log('%cSentence Analysis Results', 'font-size: 20px');
console.log('Sentence Analysis Results');
console.log(`Original Text: ${sentence}`);
console.log(`Total words: ${wordCount}`);
console.log(`Vowel count: ${vowelCount}`);
console.log(`Consonant count: ${consonantCount}`);
console.log(`Punctuation count: ${punctuationCount}`);
