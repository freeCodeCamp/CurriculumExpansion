def vowel_counter():
    vowels = {"a", "e", "i", "o", "u"}
    user_input = input("Enter a word or sentence: ").lower()

    found_vowels = set()

    for char in user_input:
        if char in vowels:
            found_vowels.add(char)

    if found_vowels:
        print(f"\nUnique vowels found: {' '.join(sorted(found_vowels))}")
    else:
        print("No vowels found.")

vowel_counter()
