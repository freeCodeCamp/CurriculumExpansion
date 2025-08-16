def gen_parentheses(pairs):
    
    if not isinstance(pairs, int):
        return "The number of pairs should be an integer"
    if pairs < 1:
        return "The number of pairs should be at least 1"

    # Each state is a tuple: (current_string, opens_used, closes_used)
    queue = [("", 0, 0)]
    result = []

    # BFS traversal
    while queue:
        current, opens_used, closes_used = queue.pop(0)

        # If we've built a full-length string, collect it
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            # Add an opening parenthesis if we still can
            if opens_used < pairs:
                queue.append((current + "(", opens_used + 1, closes_used))
            # Add a closing parenthesis if it stays balanced
            if closes_used < opens_used:
                queue.append((current + ")", opens_used, closes_used + 1))

    return result

print(gen_parentheses(1))
# Output: ['()']

print(gen_parentheses(2))
# Output: ['(())', '()()']

print(gen_parentheses(3))
# Output: ['((()))', '(()())', '(())()', '()(())', '()()()']

# Invalid type
print(gen_parentheses("3"))
# Output: The number of pairs should be an integer

# Out of range
print(gen_parentheses(0))
# Output: The number of pairs should be at least 1
