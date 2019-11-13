from random import randint
import os

ROW_SIZE = 10
NUMBER_OF_TILES = ROW_SIZE * ROW_SIZE
NUMBER_OF_MINES = NUMBER_OF_TILES // 10

class Tile():
    """ A single tile in the minesweeper grid """
    def __init__(self, displayCharacter):
        self.displayCharacter = displayCharacter
        self.isCovered = True
        self.containsMine = False
        self.neighboringMineCount = 0

class Board():
    """ Board class represents a board for the MineSweeper Game """
    def __init__(self):
        self.freeTileCount = NUMBER_OF_TILES - NUMBER_OF_MINES
        self.grid = [Tile('😀') for _ in range(NUMBER_OF_TILES)]
        self.generateMines()
        self.calculateNeighboringMines()

    def generateMines(self):
        """ Places mines at random tile positions in the entire grid list """
        for _ in range(NUMBER_OF_MINES):
            minePlaced = False
            while not minePlaced:
                randomPosition = randint(0, (NUMBER_OF_TILES-1))
                if not self.grid[randomPosition].containsMine:
                    self.grid[randomPosition].containsMine = True
                    minePlaced = True

    def calculateNeighboringMines(self):
        """ Calculates the number of mines adjacent to each tile """
        for index, tile in enumerate(self.grid):
            checkUp = index > (ROW_SIZE-1)
            checkDown = index < (NUMBER_OF_TILES-ROW_SIZE)
            checkLeft = index % ROW_SIZE != 0
            checkRight = (index+1) % ROW_SIZE != 0

            checkULD = checkUp and checkLeft
            checkURD = checkUp and checkRight
            checkLLD = checkDown and checkLeft
            checkLRD = checkDown and checkRight

            if checkUp and self.grid[index-ROW_SIZE].containsMine:
                tile.neighboringMineCount += 1
            if checkDown and self.grid[index+ROW_SIZE].containsMine:
                tile.neighboringMineCount += 1
            if checkLeft and self.grid[index-1].containsMine:
                tile.neighboringMineCount += 1
            if checkRight and self.grid[index+1].containsMine:
                tile.neighboringMineCount += 1
            if checkULD and self.grid[index-ROW_SIZE-1].containsMine:
                tile.neighboringMineCount += 1
            if checkURD and self.grid[index-ROW_SIZE+1].containsMine:
                tile.neighboringMineCount += 1
            if checkLLD and self.grid[index+ROW_SIZE-1].containsMine:
                tile.neighboringMineCount += 1
            if checkLRD and self.grid[index+ROW_SIZE+1].containsMine:
                tile.neighboringMineCount += 1

    def cascade(self, index):
        """ Clear a tile. If tile has no adjacent mines, continue to clear adjacent tiles
        until either the grid boundary is reached or a tile with adjacent mines is reached. """
        if not self.grid[index].isCovered:
            return

        self.clearTile(index)
        if self.grid[index].neighboringMineCount != 0:
            return

        # Only check directions withing board boundaries
        checkUp    = index > (ROW_SIZE-1)
        checkDown  = index < (NUMBER_OF_TILES-ROW_SIZE)
        checkLeft  = (index % ROW_SIZE) != 0
        checkRight = ( (index+1) % ROW_SIZE) != 0

        if checkUp:
            self.cascade(index-ROW_SIZE)
        if checkDown:
            self.cascade(index+ROW_SIZE)
        if checkLeft:
            self.cascade(index-1)
        if checkRight:
            self.cascade(index+1)


    def clearTile(self, index):
        """ Sets a tile in the grid as uncovered """
        self.grid[index].displayCharacter = str(self.grid[index].neighboringMineCount)
        self.grid[index].isCovered = False
        self.freeTileCount -= 1

    def checkTile(self, index):
        """ Checks a tile in the grid to determine if it contains a mine """
        status = {'boardClear' : False, 'containsMine' : False, 'isCovered' : True,  }

        if self.grid[index].containsMine:
            status['containsMine'] = True
            return status

        if not self.grid[index].isCovered:
            status['isCovered'] = False

        self.cascade(index)

        if (self.freeTileCount <= 0):
            status['boardClear'] = True

        return status

    def displayGrid(self):
        """ Show all display characters of mines in grid as a square matrix """
        os.system('clear')
        print('**** MINESWEEPER ****')
        print('   1 2 3 4 5 6 7 8 9 0')
        print()
        rowNumber = 0
        row = '0  '
        for index in range(len(self.grid)):
            row += self.grid[index].displayCharacter + ' '
            if (index+1) % ROW_SIZE == 0:
                print(row)
                rowNumber += 1
                row = str(rowNumber) + '  '
        print()
    
    def revealMines(self):
        for tile in self.grid:
            if tile.containsMine == True:
                tile.displayCharacter = "💣"


class Game():
    """ Represents the minesweeper game using the Board class """
    def __init__(self):
        self.board = Board()
        self.GAME_OVER = False
        self.WIN = False

    def getUserChoice(self):
        """ Get and validate user input """
        while True:
            userIn = input(f"Please select a tile between 1 and {NUMBER_OF_TILES}: ")
            try:
                userIn = int(userIn)
            except ValueError:
                print("Invalid input, try again.")
            if userIn in range(1,NUMBER_OF_TILES+1):
                return userIn - 1

    def makeMove(self, index):
        """ Make a move in the game """
        status = self.board.checkTile(index)
        if status['containsMine']:
            return  True
        elif not status['isCovered']:
            return False
        if status['boardClear']:
            self.WIN = True
            return True

    def mainLoop(self):
        """ Main loop for the minesweeper game """
        while not self.GAME_OVER:
            self.board.displayGrid()
            index = self.getUserChoice()
            self.GAME_OVER = self.makeMove(index)
        if self.WIN:
            print("YOU WON")
        else:
            self.board.revealMines()
            self.board.displayGrid()
            print("YOU LOSE")

    def run(self):
        self.mainLoop()


game = Game()
game.run()
