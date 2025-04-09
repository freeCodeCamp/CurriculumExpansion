1. You should define a class named `GameCharacter` that represents a game character with stats like name, health, mana, and level.
2. Inside the `__init__` method of the `GameCharacter` class, you should:
    - Take `name` as a parameter.
    - Initialize `__name` with the given name.
    - Set default values for `__health` (100), `__mana` (50), and `__level` (1).
    - Use double underscores (`__`) to make all attributes private.
3. You should define getter methods to allow read-only access to the character's attributes:
    - `get_name()` should return the character's name.
    - `get_health()` should return the current health.
    - `get_mana()` should return the current mana.
    - `get_level()` should return the current level.
4. You should define a method named `take_damage(amount)` that:
    - Decreases the character’s health by `amount` only if the amount is greater than 0.
    - Ensures the health does not go below 0.
5. You should define a method named `heal(amount)` that:
    - Increases the character’s health by `amount` only if the amount is greater than 0.
    - Caps the maximum health at 100.
6. You should define a method named `use_mana(amount)` that:
    - Decreases the character’s mana by `amount` only if the amount is greater than 0 and less than or equal to the current mana.
7. You should define a method named `regenerate_mana(amount)` that:
    - Increases the character’s mana by `amount` only if the amount is greater than 0.
    - Caps the maximum mana at 50.
8. You should define a method named `level_up()` that:
    - Increases the character’s level by 1.
    - Resets health to 100 and mana to 50.
    - Prints a message showing the new level.
9. You should define a method named `status()` that:
    - Prints the character’s name, level, current health, and mana.