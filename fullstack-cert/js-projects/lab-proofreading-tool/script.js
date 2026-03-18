function findRepeatedPhrases(words, phraseLength) {
  const repeatedWordsIndecies = []

  for (let i = 0; i <= words.length - phraseLength; i++) {
    for (let j = i + 1; j <= words.length - phraseLength; j++) {
      let match = true

      for (let k = 0; k < phraseLength; k++) {
        if (words[i + k] !== words[j + k]) {
          match = false
          break
        }
      }

      if (match) {
        repeatedWordsIndecies.push(i)
        break
      }
    }
  }

  return repeatedWordsIndecies
}

function findPalindromeBreaks(words) {
  const palindromesBroken = []

  for (let i = 0; i < Math.floor(words.length / 2); i++) {
    const palindromeIndex = words.length - 1 - i

    if (words[i] !== words[palindromeIndex]) {
      palindromesBroken.push(i)
    }
  }

  return palindromesBroken
}

function analyseTexts(texts, phraseLength) {
  let results = []
  for (let i = 0; i < texts.length; i++) {
    const repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength)
    const palindromeBreaks = findPalindromeBreaks(texts[i])

    results.push({ repeatedPhrases, palindromeBreaks })
  }

  return results
}
