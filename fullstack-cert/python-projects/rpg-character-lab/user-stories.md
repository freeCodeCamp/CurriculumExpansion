User stories:
1. You should have a function named `create_character`.
1. The function should accept in order a character name and three stats, strength, intelligence, and charisma.
1. The character name should be validated:
   - if the character name is not a string, the function should return `The character name should be a string`
   - if the character name is longer than 10 characters, the function should return `Character name is too long`
   - if the character name contains spaces, the function should return `Character name should not contain spaces`
1. The stats should also be validated:
   - If one or more stats are not integers, the function should return `All stats should be integers`
   - If one or more stats are less than 1, the function should return `All stats should start with a minimum of 1`
   - If one or more stats are more than 4, the function should return `All stats should be no more than 4`
   - If the sum of all stats is different than 7, the function should return `The character should start with 7 points`
1. If all values pass the verification, the function should return a string with four lines:
   - the first line should contain the character name
   - lines 2-4 should start with the stat abbreviation, `STR`, `INT` or `CHA` (in this order), then a space, and then a number of full dots (`●`) equal to the value of the stat, and a number of empty dots (`○`) to reach 10. Example: if the value of strength is 3 there must be 3 full dots followed by 7 empty dots. The dots are given in the editor.