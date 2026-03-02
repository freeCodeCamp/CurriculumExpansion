function findMotif(sequence, motifLength) {
  const motifPositions = []

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

function detectMirror(sequence) {
  const mirrorsBroken = []

  for (let i = 0; i < Math.floor(sequence.length / 2); i++) {
    const mirrorIndex = sequence.length - 1 - i

    if (sequence[i] !== sequence[mirrorIndex]) {
      mirrorsBroken.push(i)
    }
  }

  return mirrorsBroken
}

function findMissingFrames(sequence, pattern) {
  const missingFrames = []

  for (let i = 0; i < sequence.length; i++) {
    const expectedFrame = pattern[i % pattern.length]

    if (sequence[i] !== expectedFrame) {
      missingFrames.push(i)
    }
  }

  return missingFrames
}

function scanBinarySignalSequences(sequences, motifLength, pattern) {
  return sequences.map((sequence) => {
    return {
      motifPositions: findMotif(sequence, motifLength),
      mirrorsBroken: detectMirror(sequence),
      missingFrames: findMissingFrames(sequence, pattern),
    }
  })
}
