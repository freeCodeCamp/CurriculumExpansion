def count_letters(text):
    text = text.lower()
    frequencies = {}

    for char in text:
        if char.isalpha(): 
            if char in frequencies:
                frequencies[char] += 1
            else:
                frequencies[char] = 1

    for letter in sorted(frequencies):
        print(f"{letter}: {frequencies[letter]}")

user_input = input("Enter a sentence: ")
count_letters(user_input)
