from time import sleep
from typing import Dict, List

class Maker:
    '''
    The Maker class represents the coffee maker itself. It keeps track of the water, milk,
    and beans in the machine. Makes coffee and reports on the resources.
    '''

    def __init__(self, resources: Dict [str, int]):
        self.resources = resources

    def report(self):
        for resource, amount in self.resources.items():
            print(f'{resource}: {amount} {'gm' if resource == 'beans' else 'ml'}')

    def is_resource_sufficient(self, menu_item):
        for ingredient, amount in menu_item.ingredients.items():
            if amount >= self.resources.get(ingredient, 0):
                print(f'Sorry there is not enough {ingredient}.')
                print()
                return False
        return True

    def make_coffee(self, menu_item):
        for ingredient, amount in menu_item.ingredients.items():
            self.resources[ingredient] -= amount
            sleep(5)
        print(f"Here's your {menu_item.name}. Enjoy! :)")
        print()


class MenuItem:
    '''
    The MenuItem class represents a menu item. It keeps track of the name, the ingredients,
    and the cost.
    '''

    def __init__(self, name: str, cost: float, ingredients: Dict[str, int]):
        self.name = name
        self.cost = cost
        self.ingredients = ingredients

    def __str__(self):
        return f'{self.name.capitalize()} (${self.cost})'


class Menu:
    '''
    The Menu class represents the menu. It keeps track of the menu items where each item is
    an instance of the MenuItem class. The class holds the functionalities for finding an
    individual menu item and getting all the menu items.
    '''

    def __init__(self, menu_items: List[MenuItem]):
        self.menu_items = menu_items

    def get_all_menu_items(self):
        options = ''
        for item in self.menu_items:
            options += f'{item.name}/'
        return options

    def find_menu_item(self, item_name: str):
        for item in self.menu_items:
            if item.name == item_name:
                return item
        raise Exception('That item is not available.')
        # print('Sorry that item is not available.')

class Stash:
    '''
    The Stash class represents the stash. It keeps track of the money in the machine.
    '''
    def __init__(self, profit: int):
        self.profit = profit


    def report(self):
        print(f'Money: ${self.profit}')

    def make_payment(self, price: float):
        try:
            money_received = float(input('How much money are you giving me? '))

            if money_received >= price:
                change = round(money_received - price, 2)
                print(f'Here is ${change} in change.')
                self.profit += price
                return True
            else:
                print("Sorry that's not enough money. Money refunded.")
                return False
        except ValueError:
            print('The amount of money has to be a numerical value.')


menu = Menu([
    MenuItem(name='latte', cost=2.5, ingredients={'water': 200, 'milk': 150, 'beans': 24}),
    MenuItem(name='espresso', cost=1.5, ingredients={'water': 50, 'milk': 0, 'beans': 18}),
    MenuItem(name='cappuccino', cost=3, ingredients={'water': 250, 'milk': 50, 'beans':24}),
    ])
money_stash = Stash(profit=0)
coffee_maker = Maker(resources={
    'water': 300,
    'milk': 200,
    'beans': 100,
    })
is_on = True

while is_on:
    print('Welcome to freeCodeCamp Coffee Machine')
    print()
    for available_item in menu.menu_items:
        print(available_item)
    print()
    print('Type "report" to check available resource \nand "off" to log out from machine.')
    print()

    options = menu.get_all_menu_items()
    user_choice = input(f'What would you like?\nOptions ({options}): ').strip().lower()

    try:
        if user_choice == 'off':
            print('Shutting down!')
            is_on = False
        elif user_choice == 'report':
            coffee_maker.report()
            money_stash.report()
        elif menu.find_menu_item(user_choice) is None:
            print('\033[31mError. Please choose an available option.\033[m')
        else:
            beverage = menu.find_menu_item(user_choice)
            if coffee_maker.is_resource_sufficient(beverage) and money_stash.make_payment(beverage.cost):
                print('Thank you! Allow us to make your beverage now...')
                coffee_maker.make_coffee(beverage)
    except Exception as error:
        print(error)
