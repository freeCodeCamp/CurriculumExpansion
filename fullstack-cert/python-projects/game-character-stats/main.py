class GameCharacter:
    def __init__(self, name):
        self.__name = name
        self.__health = 100
        self.__mana = 50
        self.__level = 1

    # Getter methods
    def get_name(self):
        return self.__name

    def get_health(self):
        return self.__health

    def get_mana(self):
        return self.__mana

    def get_level(self):
        return self.__level

    # Setter methods with validation
    def take_damage(self, amount):
        if amount > 0:
            self.__health -= amount
            self.__health = max(0, self.__health)  # prevent negative health

    def heal(self, amount):
        if amount > 0:
            self.__health += amount
            if self.__health > 100:
                self.__health = 100

    def use_mana(self, amount):
        if 0 < amount <= self.__mana:
            self.__mana -= amount

    def regenerate_mana(self, amount):
        if amount > 0:
            self.__mana += amount
            if self.__mana > 50:
                self.__mana = 50

    def level_up(self):
        self.__level += 1
        self.__health = 100
        self.__mana = 50
        print(f"{self.__name} leveled up to {self.__level}!")

    def status(self):
        print(f"Name: {self.__name}")
        print(f"Level: {self.__level}")
        print(f"Health: {self.__health}")
        print(f"Mana: {self.__mana}")


# Example usage
hero = GameCharacter("Kratos")
hero.status()

hero.take_damage(30)
hero.use_mana(10)
hero.status()

hero.level_up()
hero.status()
