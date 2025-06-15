This is a prototype for a workshop.

My idea for step division would be to first build

```py
def pin_extractor(poem):
    secret_code = ''
    lines = poem.split('\n')
    for i, line in enumerate(lines):
        word = line.split(' ')[i]
        secret_code += str(len(word))
    return secret_code

poem = """Stars and the moon
shine in the sky
white and bright
until the end of the night"""

pin_extractor(poem)
```

and then from this update to being able to use this on a list of strings.