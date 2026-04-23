In this lab, you will build a text proofreading tool that checks for two common writing issues: repeated phrases and non-palindrome words.

A **repeated phrase** is a sequence of consecutive words that appears more than once in a text. For example, in the array `["the", "cat", "sat", "the", "cat"]`, the phrase `"the cat"` (length `2`) appears starting at index `0` and again at index `3`. Both indices — the first occurrence and all later ones — are returned.

A **palindrome word** is a word that reads the same forwards and backwards, ignoring letter case. For example, `"racecar"`, `"Level"`, and `"madam"` are palindromes, while `"hello"` and `"world"` are not.

You will work with arrays of words that represent texts:

```js
const text1 = ["level", "the", "cat", "sat", "the", "cat", "racecar"];
```

When working with multiple texts, you will use an array of these word arrays:

```js
const texts = [
  ["level", "the", "cat", "sat", "the", "cat", "racecar"],
  ["madam", "hello", "madam"]
];
```

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

# User Stories

1. You should have a function named `isPalindrome` with one parameter: `word`.

1. The `isPalindrome` function should return `true` if `word` is a palindrome and `false` otherwise. Comparisons should be case-insensitive. For example:
   - `isPalindrome("racecar")` should return `true`
   - `isPalindrome("Level")` should return `true`
   - `isPalindrome("hello")` should return `false`

1. You should have a function named `findPalindromeBreaks` with one parameter: `words`, which is an array of strings.

1. The `findPalindromeBreaks` function should return an empty array `[]` if `words` is empty. For example:
   - `findPalindromeBreaks([])` should return `[]`

1. The `findPalindromeBreaks` function should return an array of the indices of words that are **not** palindromes. For example:
   - `findPalindromeBreaks(["racecar", "hello", "level"])` should return `[1]`
   - `findPalindromeBreaks(["madam", "civic", "radar"])` should return `[]`

1. You should have a function named `findRepeatedPhrases` with two parameters: `words` (an array of strings) and `phraseLength` (a number).

1. The `findRepeatedPhrases` function should return an empty array `[]` if `phraseLength` is greater than or equal to `words.length`.

1. The `findRepeatedPhrases` function should use nested loops to find all starting indices where a repeated phrase of length `phraseLength` occurs, including the index of the first occurrence. For example:
   - `findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2)` should return `[0, 3]`
   - `findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 3)` should return `[]`

1. You should have a function named `analyzeTexts` with two parameters: `texts` (an array of word arrays) and `phraseLength` (a number).

1. The `analyzeTexts` function should return an empty array `[]` if `texts` is empty.

1. The `analyzeTexts` function should return an array of result objects with the shape `{ repeatedPhrases, palindromeBreaks }`. For example:
   - `analyzeTexts([["racecar", "hello", "level"]], 2)` should return `[{ repeatedPhrases: [], palindromeBreaks: [1] }]`
