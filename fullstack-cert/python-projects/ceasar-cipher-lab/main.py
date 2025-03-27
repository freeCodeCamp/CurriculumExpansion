def caesar_cipher(text, shift, encrypt=True):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    if not encrypt:
        shift = -shift
    
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    result = ""

    for char in text:
        if char.lower() in alphabet:
            is_upper = char.isupper()
            new_char = shifted_alphabet[alphabet.index(char.lower())]
            result += new_char.upper() if is_upper else new_char
        else:
            result += char  

    return result

choice = input("Do you want to (E)ncrypt or (D)ecrypt? ").strip().lower()

if choice not in ('e', 'd'):
    print("Invalid choice. Please enter 'E' for encryption or 'D' for decryption.")
else:
    text = input("Enter your message: ")
    shift = int(input("Enter the shift value (1-25): "))

    encrypt = choice == 'e'
    result = caesar_cipher(text, shift, encrypt)
    print(result)
