This is a prototype for a workshop.

My idea for step division would be to first build

```py
def string_classificator(string):
    has_space = False
    for character in string:
        if character == ' ':
            has_space = True

    if has_space:
        return "This is a sentence"
    else:
        return "This is a word"

    
```

and then from this update to being able to use this on a list of strings.