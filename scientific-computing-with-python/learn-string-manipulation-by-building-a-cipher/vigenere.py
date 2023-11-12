from string import ascii_lowercase as letters

def vigenere(message, key, direction):    
    key_index = 0
    final_message = ''
    for char in message.lower():
        if not char.isalpha():
            # Append any non-letter character to the message
            final_message += char
            continue
        
        # Find the right key character to encode/decode
        key_char = key[key_index % len(key)]
        key_index += 1
        
        # Define the shift and the encrypted/decrypted letter
        shift = letters.index(key_char)
        index = letters.find(char)
        new_index = (index + shift*direction) % 26
        final_message += letters[new_index]

    return final_message

def encrypt(message, key):
    return vigenere(message, key, 1)

def decrypt(message, key):
    return vigenere(message, key, -1)

text = 'mrttaqrhknsw ih puggrur'
custom_key = 'happycoding'

print(f'\nEncrypted text: {text}')
print(f'Key: {custom_key}')    
print(f'\nDecrypted text: {decrypt(text, custom_key)}', '\n')
