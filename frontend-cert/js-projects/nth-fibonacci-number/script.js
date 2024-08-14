const sequence = [0, 1];

const fibonacci = (n) => {
    if (n <= 2) {
        return sequence[n - 1];
    }
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence[n - 1]
}
