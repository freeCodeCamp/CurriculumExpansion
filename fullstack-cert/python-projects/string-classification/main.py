def strings_classificator(strings):
    sentences = []
    words = []
    for string in strings:
        has_space = False
        for character in string:
            if character == ' ':
                has_space = True

        if has_space:
            sentences.append(string)
        else:
            words.append(string)

    return [words, sentences]