class Board:
    def __init__(self, board):
        self.board = board        
        self.print_board()
    
    # Find the first empty square (currently containing zero)
    def find_empty_square(self):
        for row, lst in enumerate(self.board):
            if 0 in lst:
                col = lst.index(0)
                return row, col             
        return None
    
    # Check if num can be inserted in the row
    def valid_in_row(self, row, num):    
        for col in range(9):
            if self.board[row][col] == num:
                return False
        return True

    # Check if num can be inserted in the column
    def valid_in_col(self, col, num):    
        for row in range(9):
            if self.board[row][col] == num:
                return False
        return True

    # Check if num can be inserted in 3x3 square
    def valid_in_square(self, row, col, num):
        row_start = (row // 3) * 3
        col_start = (col // 3) * 3
        for i in range(row_start, row_start + 3):
            for j in range(col_start, col_start + 3):
                if self.board[i][j] == num:
                    return False
        return True
    
    # Check if num is a valid choice
    # based on the return value of the 3 valid_in_x functions 
    def is_valid(self, empty, n):        
        valid_in_row = self.valid_in_row(empty[0], n)
        valid_in_col = self.valid_in_col(empty[1], n)
        valid_in_square = self.valid_in_square(empty[0], empty[1], n)
        if all([valid_in_row, valid_in_col, valid_in_square]):
            return n
        return False
    
    def print_board(self):        
        upper_lines = f'╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢'        
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝'        
        print(upper_lines)
        for index, line in enumerate(self.board):
            row_list = []
            row_square_1 = list('│'.join(str(item) for item in line[:3]))
            row_list.extend(row_square_1)
            row_list.append('║')
            row_square_2 = list('│'.join(str(item) for item in line[3:6]))
            row_list.extend(row_square_2)
            row_list.append('║')
            row_square_3 = list('│'.join(str(item) for item in line[6:]))
            row_list.extend(row_square_3)
            
            row = ' '.join(str(item) for item in row_list)
            row_empty = row.replace('0', ' ')
            print('║', row_empty, '║' )            
            if index < 8:
                if index % 3 == 2:
                    print(f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣')
                else:        
                    print(middle_lines)
            else:
                print(lower_lines)

    def solver(self):
        # When no empty square can be found the puzzle is solved
        if (next_empty := self.find_empty_square()) is None:
            return True
        else:
            # Find the first valid digit to insert from 1 to 9
            for i in range(1, 10):
                is_valid = self.is_valid(next_empty, i)
                if is_valid:
                    row = next_empty[0]
                    col = next_empty[1]
                    # Replace the zero with the valid digit
                    self.board[row][col] = is_valid
                    
                    if self.solver():
                        return True
                    # Restoring the zero if the puzzle cannot be solved
                    self.board[row][col] = 0
        
        # Trigger backtracking
        return False
                

class Sudoku_Solver:
    def __init__(self, board):
        print('\nPuzzle to solve:')
        gameboard = Board(board)
        solution = gameboard.solver()
        if solution:
            print('\nSolved puzzle:')
            gameboard.print_board()
        else:
            print('\nThe provided puzzle is unsolvable.')  



example_board = [
    [0, 0, 2, 0, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 7, 6, 2],
    [4, 3, 0, 0, 0, 0, 8, 0, 0],
    [0, 5, 0, 0, 3, 0, 0, 9, 0],
    [0, 4, 0, 0, 0, 0, 0, 2, 6],
    [0, 0, 0, 4, 6, 7, 0, 0, 0],
    [0, 8, 6, 7, 0, 4, 0, 0, 0],
    [0, 0, 0, 5, 1, 9, 0, 0, 8],
    [1, 7, 0, 0, 0, 6, 0, 0, 5]
]

solver = Sudoku_Solver(example_board)