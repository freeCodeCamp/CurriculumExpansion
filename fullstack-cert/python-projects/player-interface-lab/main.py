from abc import ABC, abstractmethod
from random import choice


class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self):
        x, y = self.position
        move = choice(self.moves)
        new_x = move[0] + x
        new_y = move[1] + y
        self.position = (new_x, new_y)
        self.path.append(self.position)
        return self.position

    @abstractmethod
    def level_up(self):
        pass


class Pawn(Player):
    def __init__(self):
        super().__init__()
        self.moves = [(0, 1), (1, 0), (-1, 0), (0, -1)]

    def level_up(self):
        self.moves.extend([(1, 1), (1, -1), (-1, 1), (-1, -1)])
