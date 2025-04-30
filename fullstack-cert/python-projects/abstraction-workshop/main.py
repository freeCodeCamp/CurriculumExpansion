from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

    def info(self):
        return "This is an animal."

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

def animal_sound(animal: Animal):
    print(animal.speak())

dog = Dog()
cat = Cat()

animal_sound(dog)
animal_sound(cat)
