def convert_to_snake_case(pascal_cased_string):

    # snake_cased_char_list = [pascal_cased_string[0].lower()]
    # for char in pascal_cased_string[1:]:
    #     if char.isupper():
    #         snake_cased_char_list.append(f'_{char.lower()}')
    #     else:
    #         snake_cased_char_list.append(char)

    snake_cased_char_list = [f'_{char.lower()}' if char.isupper() else char for char in pascal_cased_string]

    return ''.join(snake_cased_char_list).strip('_')


def main():
    pascal_cased_string = 'aLongAndComplexString'
    print(convert_to_snake_case(pascal_cased_string))


if __name__ == '__main__':
    main()
    