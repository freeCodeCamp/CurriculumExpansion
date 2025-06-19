def pin_extractor(poems):
    secret_codes = []
    for poem in poems:
        secret_code = ''
        lines = poem.split('\n')
        for i, line in enumerate(lines):
            words = line.split(' ')
            if len(words) <= i:
                secret_code += '0'
            else:
                secret_code += str(len(words[i]))
            
        secret_codes.append(secret_code)
    return secret_codes

poem1 = """Stars and the moon
shine in the sky
white and bright
until the end of the night"""

poem2 = """Beneath the sky so wide and blue,
The grass wakes up with morning dew.
It whispers soft in wind's embrace,
A sea of green in quiet grace.
It grows where peace and time run true."""

print(pin_extractor([poem1, poem2]))