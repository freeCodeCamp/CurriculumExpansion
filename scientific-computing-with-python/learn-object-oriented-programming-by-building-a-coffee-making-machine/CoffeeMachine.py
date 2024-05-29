from time import sleep

"""
The Maker class represents the coffee maker itself. It keep tracks of the water, milk,
and beans in the machine. Makes coffee and reports on the resources.
"""


class Maker:

    def __init__(self):
        self.resources = {
            "water": 300,
            "milk": 200,
            "beans": 100,
        }

    def report(self):
        print(f"Water: {self.resources['water']}ml")
        print(f"Milk: {self.resources['milk']}ml")
        print(f"Coffee: {self.resources['beans']}g")

    def is_resource_sufficient(self, ordered_menu_item):
        can_make = True
        for item in ordered_menu_item.ingredients:
            if ordered_menu_item.ingredients[item] > self.resources[item]:
                print(f"Sorry there is not enough {item}.")
                can_make = False
        return can_make

    def make_coffee(self, ordered_menu_item):
        for item in ordered_menu_item.ingredients:
            self.resources[item] -= ordered_menu_item.ingredients[item]
        print(f"Here's your {ordered_menu_item.name}. Enjoy! :)")


class MenuItem:
    """
    The MenuItem class represents a menu item. It keeps track of the name, the ingredients,
    and the cost.
    """
    def __init__(self, name, water, milk, beans, cost):
        self.name = name
        self.cost = cost
        self.ingredients = {
            'water': water,
            'milk': milk,
            'beans': beans,
        }


class Menu:
    """
    The Menu class represents the menu. It keeps track of the menu items where each item is
    an instance of the MenuItem class. The class holds the functionalities for finding an
    individual menu item and getting all the menu items.
    """
    def __init__(self):
        self.menu = [
            MenuItem(name="latte", water=200, milk=150, beans=24, cost=2.5),
            MenuItem(name="espresso", water=50, milk=0, beans=18, cost=1.5),
            MenuItem(name="cappuccino", water=250, milk=50, beans=24, cost=3),
        ]

    def get_all_menu_items(self):
        options = ""
        for item in self.menu:
            options += f"{item.name}/"
        return options

    def find_menu_item(self, item_name):
        for item in self.menu:
            if item.name == item_name:
                return item
        print("Sorry that item is not available.")


class Stash:
    """
    The Stash class represents the stash. It keeps track of the money in the machine.
    """
    CURRENCY = '$'

    def __init__(self):
        self.profit = 0

    def report(self):
        print(f"Money: {self.CURRENCY}{self.profit}")

    def make_payment(self, price):
        money_received = float(input('How much money are you giving me? '))
        if money_received >= price:
            change = round(money_received - price, 2)
            print(f"Here is {self.CURRENCY}{change} in change.")
            self.profit += price
            return True
        else:
            print("Sorry that's not enough money. Money refunded.")
            return False


def welcome():
    print('''
          WELCOME TO FCC COFFEE MACHINE!

          ------ MENU ------
          Espresso ($1.50)
          Latte ($2.50)
          Cappuccino ($3.00)
          ------------------

          PS: Type "report" at any moment
          to check our available resources.
          Type "off" to log out from the machine.
        ''')


menu = Menu()
money_stash = Stash()
coffee_maker = Maker()
is_on = True

while is_on:
    welcome()
    options = menu.get_all_menu_items()
    user_choice = str(
        input(f'What would you like?\nOptions ({options}): ')).strip().lower()

    if user_choice == 'off':
        print('Shutting down!')
        is_on = False
    elif user_choice == 'report':
        coffee_maker.report()
        money_stash.report()
    elif menu.find_menu_item(user_choice) is None:
        print('\033[31mError. Please choose an available option.\033[m')
    else:
        beverage = menu.find_menu_item(user_choice)  # Encapsulates the result
        sufficient_resources = coffee_maker.is_resource_sufficient(
            beverage)  # TrueFalse result
        sufficient_money = money_stash.make_payment(beverage.cost)
        if sufficient_resources and sufficient_money:
            print('Thank you! Allow us to make your beverage now...')
            coffee_maker.make_coffee(beverage)
            sleep(5)
