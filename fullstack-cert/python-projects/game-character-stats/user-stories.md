1. Create a class named `GameCharacter` that represents a game character. The class should manage stats such as name, health, mana, and level. In the `__init__` method:
    - Accept a parameter `name` and initialize the private attribute `__name` with it.
    - Initialize `__health` to `100`, `__mana` to `50`, and `__level` to `1`.
    - Use double underscores (`__`) to ensure that all attributes are private.
2. Create a `name` property for read-only access to the character's name.
3. For the `health` property:
     - Define a getter that returns the current health.
     - Define a setter that prevents health from being set below `0`, and caps the health at `100`.
4. For the `mana` property:
     - Define a getter that returns the current mana.
     - Define a setter that prevents mana from being set below `0`, and caps the mana at `50`.
5. Create a getter for `level` to return the character's current level.
6. Define a method named `level_up()` that:
    - Increases the character's level by 1.
    - Resets health to `100` and mana to `50` using their corresponding property setters.
    - Prints a message showing the new level.
7. Define a method named `status()` that prints:
    - The character's name.
    - The character's level.
    - The character's current health.
    - The character's current mana.