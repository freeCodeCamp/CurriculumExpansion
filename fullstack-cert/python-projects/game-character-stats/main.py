class GameCharacter:
    def __init__(self, name):
        self.__name = name
        self.__health = 100
        self.__mana = 50
        self.__level = 1

    @property
    def name(self):
        return self.__name

    @property
    def health(self):
        return self.__health

    @health.setter
    def health(self, value):
        if value < 0:
            self.__health = 0
        elif value > 100:
            self.__health = 100
        else:
            self.__health = value

    @property
    def mana(self):
        return self.__mana

    @mana.setter
    def mana(self, value):
        if value < 0:
            self.__mana = 0
        elif value > 50:
            self.__mana = 50
        else:
            self.__mana = value

    @property
    def level(self):
        return self.__level

    def level_up(self):
        self.__level += 1
        self.health = 100
        self.mana = 50
        print(f"{self.__name} leveled up to {self.__level}!")

    def __str__(self):
        return (
            f"Name: {self.__name}\n"
            f"Level: {self.__level}\n"
            f"Health: {self.__health}\n"
            f"Mana: {self.__mana}"
        )



# Example usage
hero = GameCharacter("Kratos")
print(hero)

hero.health -= 30
hero.mana -= 10
print(hero)

hero.level_up()
print(hero)
