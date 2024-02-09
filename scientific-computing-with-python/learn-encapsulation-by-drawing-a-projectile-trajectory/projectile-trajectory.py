import math
import re

# constants
g = 9.81
projectile = '∙'


class Projectile:

    def __init__(self, height, speed, angle):
        self.__height = height
        self.__speed = speed
        self.__angle = math.radians(angle)

        self.__calculate_displacement()
        self.__calculate_all_coordinates()

    def __calculate_displacement(self):
        self.__displacement = self.__speed * math.cos(self.__angle) * (
            self.__speed * math.sin(self.__angle) +
            math.sqrt(self.__speed**2 * math.sin(self.__angle)**2 +
                      2 * g * self.__height)) / g

    def __calculate_y_coordinate(self, x):
        return self.__height + math.tan(self.__angle) * x - g * x**2 / (
            2 * self.__speed**2 * math.cos(self.__angle)**2)

    def __calculate_all_coordinates(self):
        self.__coordinates = []
        for x in range(math.ceil(self.__displacement)):
            y = self.__calculate_y_coordinate(x)
            self.__coordinates.append((x, y))

    def __create_coordinates_table(self):
        table = '  x      y\n'
        for x, y in self.__coordinates:
            table += f'{x:>3}{round(y, 2):>7.2f}\n'

        return table

    def __create_trajectory(self):
        rounded_coord = [(x, round(y)) for x, y in self.__coordinates]
        rows = max([y for x, y in rounded_coord]) + 1
        columns = max([x for x, y in rounded_coord]) + 1
        # TODO?: if rows and/or columns too big, no draw (how big?)
        graph = ''
        for y in range(rows, -3, -1):
            row = ''
            for x in range(-2, columns + 1):
                if (x, y) in rounded_coord:
                    row += projectile
                elif x == -1 and y >= 0:
                    row += '⊣'
                elif y == -1 and x >= 0:
                    row += '⊤'
                elif (x == -2 and y == 0) or (x == 0 and y == -2):
                    row += '0'
                else:
                    row += ' '
            graph += row + '\n'
        return graph

    def __str__(self):
        return self.__create_trajectory()

    def table(self):
        table = self.__create_coordinates_table()
        return table

    def details(self):
        print(
            f'angle: {round(math.degrees(self.__angle))}°\nspeed: {self.__speed} m/s\nstarting height: {self.__height} m\ndisplacement: {round(self.__displacement, 1)} m'
        )

    def __setitem__(self, key, newvalue):
        if key == 'angle':
            self.__angle = math.radians(newvalue)
        elif key == 'speed':
            self.__speed = newvalue
        elif key == 'height':
            self.__height = newvalue
        else:
            return "Invalid property name"

        self.__calculate_displacement()
        self.__calculate_all_coordinates()


def terminal_menu():
    page = 0
    while True:
        if page == 0:
            value_from_user = input(
                "Please provide angle, speed and starting height for the projectile separated by a space: "
            )
            value_from_user = list(map(int, re.split(r' +', value_from_user)))
            bullet = Projectile(*value_from_user)
            page = 1
        elif page == 1:
            print()
            bullet.details()
            page = int(
                input(
                    "\nChoose what to do:\n1. Draw trajectory\n2. List coordinates\n3. Change a value\n4. Exit\n"
                )) + 1
        elif page == 2:
            print(bullet)
            page = 1
        elif page == 3:
            print(bullet.table())
            page = 1
        elif page == 4:
            key = input(
                'Write "speed", "angle", or "height" to choose which value:')
            value = float(input('What value do you want to give?'))
            bullet[key] = value
            page = 1
        elif page == 5:
            break

terminal_menu()
