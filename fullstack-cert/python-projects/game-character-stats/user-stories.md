1. Create a class named `GameCharacter` that represents a game character and manages character stats.
2. When instantiated, a new `GameCharacter` object should have the following private attributes:
    - `__name` set to the string given at the moment of the instantiation.
    - `__health` set to `100`.
    - `__mana` set to `50`.
    - `__level` set to `1`.
3. Create a `name` property for read-only access to the character's name.
4. For the `health` property:
     - Define a getter that returns the current health.
     - Define a setter that prevents health from being set below `0`, and caps the health at `100`.
5. For the `mana` property:
     - Define a getter that returns the current mana.
     - Define a setter that prevents mana from being set below `0`, and caps the mana at `50`.
6. Create a getter for `level` to return the character's current level.
7. Define a method named `level_up()` that:
    - Increases the character's level by 1.
    - Resets health to `100` and mana to `50` using their corresponding property setters.
    - Prints a message in the form of `<name> leveled up to <level>!` (where `<name>` and `<level>` should be replaced by the character's name and new level, respectively).
8. Define a `__str__()` method that returns a formatted string including:
    - The character's name.
    - The character's level.
    - The character's current health.
    - The character's current mana.
   For example, a character named `Kratos`, right after the instantiation, should be represented as the following:

   ```md
    Name: Kratos
    Level: 1
    Health: 100
    Mana: 50
   ```