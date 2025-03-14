user_input = "Hello, World!"

def vowel_counter(input):
    vowels = {"a", "e", "i", "o", "u"}
    
    found_vowels = set()

    for char in input:
        if char in vowels:
            found_vowels.add(char)

    if found_vowels:
        print(f"\nUnique vowels found: {' '.join(sorted(found_vowels))}")
    else:
        print("No vowels found.")

vowel_counter(user_input)
