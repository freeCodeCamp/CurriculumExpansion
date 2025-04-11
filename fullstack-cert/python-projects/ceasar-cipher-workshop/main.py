def caesar_cipher(text, shift, encrypt=True):
    if not type(text) == str:
        return "Text must be a string value."

    if not type(shift) == int:
        return "Shift must be an integer value."

    if shift < 1 or shift > 25:
        return "Shift must be an integer between 1 and 25."

    alphabet = "abcdefghijklmnopqrstuvwxyz"

    if not encrypt:
        shift = -shift

    shifted_alphabet = alphabet[shift:] + alphabet[:shift]

    translation_table = str.maketrans(
        alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper()
    )
    return text.translate(translation_table)


def encrypt(text, shift):
    return caesar_cipher(text, shift)


def decrypt(text, shift):
    return caesar_cipher(text, shift, encrypt=False)


encrypted_text = "Pbhentr vf sbhaq va hayvxryl cynprf."
decrypted_text = decrypt(encrypted_text, 13)
print(decrypted_text)  # Courage is found in unlikely places.
