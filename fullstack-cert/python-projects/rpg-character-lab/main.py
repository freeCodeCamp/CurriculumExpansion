full_dot = '●'
empty_dot = '○'

def create_character(character_name, strength, intelligence, charisma):
    if type(character_name) != str:
        return "The character name should be a string"
    if len(character_name) > 10:
        return "Character name is too long"
    if character_name.find(" ") > -1:
        return "Character name should not contain spaces"

    if type(strength) != int or type(intelligence) != int or type(charisma) != int:
       return "All stats should be integers"
    if strength < 1 or intelligence < 1 or charisma < 1:
        return "All stats should be a minimum of 1"
    if strength > 4 or intelligence > 4 or charisma > 4:
        return "All stats should be no more than 4"
    if strength + intelligence + charisma != 7:
        return "The character should start with 7 points"
    
    character_sheet = f'{character_name}\n'
    character_sheet += f'STR {full_dot * strength}{empty_dot * (10 - strength)}\n'
    character_sheet += f'INT {full_dot * intelligence}{empty_dot * (10 - intelligence)}\n'
    character_sheet += f'CHA {full_dot * charisma}{empty_dot * (10 - charisma)}\n'
    return character_sheet


# STOP SOLUTION

# START DEMONSTRATION

# failing name verification
print(create_character(5, 3, 3, 1))
    # The character name should be a string
print(create_character("cha cha", 4, 1, 2))
    # Character name should not contain spaces
print(create_character("aaabbbcccddd", 4, 2, 1))
    # Character name is too long

# failing stats verification
print(create_character("ren", 0, 4, 3))
    # All stats should be a minimum of 1
print(create_character("ren", 4, 4, 4))
   # The character should start with 7 points
print(create_character("ren", 1, 2, 3))
   # The character should start with 7 points
print(create_character("ren", "3", "1", "2"))
   # All stats should be integers
print(create_character("ren", 5, 1, 1))
   # All stats should be no more than 4

# passing verifications
print(create_character("ren", 4, 2, 1))
'''
ren
STR ●●●●○○○○○○
INT ●●○○○○○○○○
CHA ●○○○○○○○○○
'''
