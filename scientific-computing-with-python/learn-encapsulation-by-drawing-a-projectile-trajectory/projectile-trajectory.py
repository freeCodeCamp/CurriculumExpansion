import math
import re

# constants
GRAVITATIONAL_ACCELERATION = 9.81
PROJECTILE = '∙'


class Projectile:
    __slots__ = ('__height', '__speed', '__angle')

    def __init__(self, height, speed, angle):
        self.__height = height
        self.__speed = speed
        self.__angle = math.radians(angle)

    def __calculate_displacement(self):
        #TODO: break in smaller pieces
        return self.__speed * math.cos(self.__angle) * (
            self.__speed * math.sin(self.__angle) +
            math.sqrt(self.__speed**2 * math.sin(self.__angle)**2 +
                      2 * GRAVITATIONAL_ACCELERATION * self.__height)) / GRAVITATIONAL_ACCELERATION
    
    def __calculate_y_coordinate(self, x):
        #TODO: break in smaller pieces
        return self.__height + math.tan(self.__angle) * x - GRAVITATIONAL_ACCELERATION * x**2 / (
            2 * self.__speed**2 * math.cos(self.__angle)**2)

    def calculate_all_coordinates(self):
        return [
            (x, self.__calculate_y_coordinate(x))
            for x in range(math.ceil(self.__displacement))
        ]

    def details(self):
        return f'angle: {round(math.degrees(self.__angle))}°\nspeed: {self.__speed} m/s\nstarting height: {self.__height} m\ndisplacement: {round(self.__calculate_displacementdisplacement, 1)} m'

    def __str__(self):
        return self.details()
    
    @property
    def height(self):
        return self.__height
    
    @height.setter
    def height(self, new_height):
        self.__height = new_height

    @property
    def angle(self):
        return self.__angle
    
    @angle.setter
    def angle(self, new_angle):
        self.__angle = math.radians(new_angle)

    @property
    def speed(self):
        return self.__speed

    @speed.setter
    def speed(self, new_speed):
        self.__speed = new_speed

class Graph:
    def __init__(self, coordinates):
        self.__coordinates = coordinates

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
                    row += PROJECTILE
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
        return self.__create_coordinates_table()

def terminal_menu():
    page = 0
    while True:
        if page == 0:
            value_from_user = input(
                "Please provide starting height, speed and angle for the PROJECTILE separated by a space: "
            )
            numbers = [int(number) for number in value_from_user.split()]
            
            bullet = Projectile(*numbers)
            page = 1
        elif page == 1:
            print()
            bullet.details()
            try:
                page = int(
                    input(
                        "\nChoose what to do:\n1. Draw trajectory\n2. List coordinates\n3. Change a value\n4. Exit\n"
                    )) + 1
            except:
                print('Invalid input, please try again')
        elif page == 2:
            graph = Graph(bullet.calculate_all_coordinates)
            print(graph)
            page = 1
        elif page == 3:
            graph = Graph(bullet.calculate_all_coordinates)
            print(graph.table())
            page = 1
        elif page == 4:
            key = input(
                'Write "speed", "angle", or "height" to choose which value: ')
            try:
                value = float(input('What value do you want to give? '))
                if key == 'speed':
                    bullet.speed = value
                elif key == 'angle':
                    bullet.angle = value
                elif key == 'height':
                    bullet.height = value
                else:
                    raise Exception("Valid keys are 'speed', 'height', 'angle'")

            except:
                print('Invalid value has been submitted')
            
            page = 1
        elif page == 5:
            break

terminal_menu()
