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

    def status(self):
        print(f"Name: {self.__name}")
        print(f"Level: {self.__level}")
        print(f"Health: {self.__health}")
        print(f"Mana: {self.__mana}")


# Example usage
hero = GameCharacter("Kratos")
hero.status()

hero.health = hero.health - 30
hero.mana = hero.mana - 10
hero.status()

hero.level_up()
hero.status()
