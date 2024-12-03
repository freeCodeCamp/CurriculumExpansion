function pyramid(char, count, isInverted) {
    const rows = []
    for (let i = 1; i <= count; i++) {
        if (isInverted) {
            rows.unshift(" ".repeat(count - i) + char.repeat(2 * i - 1))
        } else {
            rows.push(" ".repeat(count - i) + char.repeat(2 * i - 1))
        }        
    }
    return "\n" + rows.join("\n");
}

console.log(pyramid("#", 10, false))