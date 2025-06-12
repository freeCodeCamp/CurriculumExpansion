def pin_extractor(poems):
    secret_codes = []
    for poem in poems:
        secret_code = ''
        lines = poem.split('\n')
        for i, line in enumerate(lines):
            word = line.split(' ')[i]
            secret_code += str(len(word))
            
        secret_codes.append(secret_code)
    return secret_codes

poem = '''Stars and the moon
shine in the sky
white and bright
until the end of the night'''

print(pin_extractor([poem]))