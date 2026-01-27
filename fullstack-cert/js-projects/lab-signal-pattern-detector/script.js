function findMotif(sequence, motifLength) {
  const motifPositions = []

  if (sequence.length <= 1) {
    return []
  }

  if (motifLength <= 1) {
    return []
  }
  if (sequence.length <= motifLength) {
    return []
  }

  for (let i = 0; i <= sequence.length - motifLength; i++) {
    for (let j = i + 1; j <= sequence.length - motifLength; j++) {
      let match = true

      for (let k = 0; k < motifLength; k++) {
        if (sequence[i + k] !== sequence[j + k]) {
          match = false
          break
        }
      }

      if (match) {
        motifPositions.push(i)
        break
      }
    }
  }

  return motifPositions
}
