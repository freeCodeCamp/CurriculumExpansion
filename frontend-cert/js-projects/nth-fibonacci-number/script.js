const results = [];

const fibonacci = (n) => {
    if (n === 0 || n === 1) {
        return n;
    }
    results[0] = 0;
    results[1] = 1;
    for (let i = 2; i <= n; i++) {
        results[i] = results[i - 1] + results[i - 2];
    }
    return results[n]
}
