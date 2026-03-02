In this lab, you will create a function that accepts binary signal sequences and find the motif, mirror patterns, and missing frame in each sequence.

**Binary Signal Sequence**: An array of 0s and 1s

**Motif**: A repeating pattern. For example, this sequence `[1, 0, 0, 1, 1, 0, 1, 0, 0, 1]` has this pattern `1, 0, 0, 1` repeated twice. So this pattern is considered a motif.

**Mirror Pattern**: A pattern that consists of a porition and the symetrical mirror version of that portion immediately after it. For example, this sequence `[0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]` has a mirror pattern, `[1, 0, 0, 1, 1, 0, 0, 1]`. The first portion, `1, 0, 0, 1`, when reversed from right to left gives the second portion, `1, 0, 0, 1`, which is the same as the first portion.

**Missing Frame**: A frame in the sequence that is neither 0 or 1.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**:

1. You should accept an array of signal sequences (each sequence is an array of 0s and 1s).
2. You should implement `findMotif(sequence, motifLength)` using nested loops with early exit flags.
3. You should implement `detectMirror(sequence)` that compares mirrored indices and reports mismatches.
4. You should implement `findMissingFrames(sequence)` that logs gaps in expected binary patterns.
5. You should aggregate results into `{ motifPositions, mirrorsBroken, missingFrames }` for each sequence.
