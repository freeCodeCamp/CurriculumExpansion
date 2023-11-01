from string import ascii_lowercase as letters

def vigenere(message, key, direction):
    spaced_key = ''
    key_index = 0
    final_message = ''
    for char in message.lower():        
        if char == ' ':            
            # Keep the same spacing in message and key
            final_message += ' '            
            spaced_key += ' '
            continue
        index = letters.find(char)
        if index >= 0:
            # Generate the key repeating it up to the messege length
            spaced_key += key[key_index % len(key)]
            key_index += 1

            # Define the shift and the encrypted/decrypted letter
            shift = letters.find(spaced_key[-1])
            new_index = (index + shift *direction) % 26
            final_message += letters[new_index]    

    return final_message

def encrypt(message, key):
    return vigenere(message, key, 1)

def decrypt(message, key):
    return vigenere(message, key, - 1)

text = 'mrttaqrhknsw ih puucpm'
k = 'happycoding'

print(f'\nEncrypted text: {text}')
print(f'Key: {k}')    
print(f'\nDecrypted text: {decrypt(text, k)}', '\n')