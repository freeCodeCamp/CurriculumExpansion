import string

def caesar_cipher(text, shift, encrypt=True):
    """Encrypt or decrypt text using a Caesar cipher with maketrans."""
    
    alphabet = string.ascii_lowercase
    
    if not encrypt:
        shift = -shift
    
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(),
                                      shifted_alphabet + shifted_alphabet.upper())
    
    return text.translate(translation_table)  

choice = input("Do you want to (E)ncrypt or (D)ecrypt? ").strip().lower()

if choice not in ('e', 'd'):
    print("Invalid choice. Please enter 'E' for encryption or 'D' for decryption.")
else:
    text = input("Enter your message: ")
    shift = int(input("Enter the shift value (1-25): "))

    process = lambda msg, sh: caesar_cipher(msg, sh, encrypt=(choice == 'e'))
    
    result = process(text, shift)
    print("Result:", result)
