sequence = [0, 1]

def fibonacci(n):
    if n <= 2:
        return sequence[n - 1]
    for i in range(2, n):
        sequence.append(sequence[i - 1] + sequence[i - 2])
    return sequence[n - 1]
