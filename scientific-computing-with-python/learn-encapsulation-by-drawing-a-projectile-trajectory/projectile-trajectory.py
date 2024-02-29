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
        # return self.__speed * math.cos(self.__angle) * (
        #     self.__speed * math.sin(self.__angle) +
        #     math.sqrt(self.__speed**2 * math.sin(self.__angle)**2 +
        #               2 * GRAVITATIONAL_ACCELERATION * self.__height)) / GRAVITATIONAL_ACCELERATION
        horizontal_component = self.__speed * math.cos(self.__angle)
        vertical_component = self.__speed * math.sin(self.__angle)
        sqrt_component = math.sqrt(self.__speed ** 2 * math.sin(self.__angle) ** 2 +
                                   2 * GRAVITATIONAL_ACCELERATION * self.__height)
        displacement = horizontal_component * (vertical_component + sqrt_component) / GRAVITATIONAL_ACCELERATION
        return displacement

    def __calculate_y_coordinate(self, x):
        #TODO: break in smaller pieces
        # return self.__height + math.tan(self.__angle) * x - GRAVITATIONAL_ACCELERATION * x**2 / (
        #     2 * self.__speed**2 * math.cos(self.__angle)**2)
        height_component = self.__height
        angle_component = math.tan(self.__angle) * x
        acceleration_component = GRAVITATIONAL_ACCELERATION * x ** 2 / (
                2 * self.__speed ** 2 * math.cos(self.__angle) ** 2)
        y_coordinate = height_component + angle_component - acceleration_component
        return y_coordinate

    def calculate_all_coordinates(self):
        return [
            (x, self.__calculate_y_coordinate(x))
            for x in range(math.ceil(self.__calculate_displacement()))
        ]

    def details(self):
        return f'\nangle: {round(math.degrees(self.__angle))}°\nspeed: {self.__speed} m/s\nstarting height: {self.__height} m\ndisplacement: {round(self.__calculate_displacement(), 1)} m'

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
        table = '\n  x      y\n'
        for x, y in self.__coordinates:
            table += f'{x:>3}{round(y, 2):>7.2f}\n'

        return table

    def __create_trajectory(self):
        rounded_coord = [(x, round(y)) for x, y in self.__coordinates]
        rows = max([y for x, y in rounded_coord]) + 1
        columns = max([x for x, y in rounded_coord]) + 1
        graph_matrix = [[PROJECTILE if (x, y) in rounded_coord else ' ' for x in range(columns)] for y in range(rows, -1, -1)]
        graph_rows = ['⊣' + ''.join(row) for row in graph_matrix] + [' ' + '⊤'*columns]
        graph = '\n' + '\n'.join(graph_rows)
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
            print(bullet.details())
            try:
                page = int(
                    input(
                        "\nChoose what to do:\n1. Draw trajectory\n2. List coordinates\n3. Change a value\n4. Exit\n"
                    )) + 1
            except:
                print('Invalid input, please try again')
        elif page == 2:
            graph = Graph(bullet.calculate_all_coordinates())
            print(graph)
            page = 1
        elif page == 3:
            graph = Graph(bullet.calculate_all_coordinates())
            print(graph.table())
            page = 1
        elif page == 4:
            key = input(
                'Write "speed", "angle", or "height" to choose which value: ')
            if f'__{key}' in bullet.__slots__:
                try:
                    value = float(input('What value do you want to give? '))
                    bullet.__setattr__(key, value)
                except ValueError:
                    print('Invalid value has been submitted')
            else:
                print('Invalid value has been submitted')
            
            page = 1
        elif page == 5:
            break

terminal_menu()