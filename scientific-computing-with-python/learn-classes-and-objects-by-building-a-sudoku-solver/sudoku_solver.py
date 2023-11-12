class Board:
    def __init__(self, board):
        self.board = board        
    
    def find_empty_square(self):
        '''Find the first empty square - currently containing zero.'''
        for row, contents in enumerate(self.board):
            try:
                col = contents.index(0)                
                return row, col
            except ValueError:
                pass
        return None    
    
    def valid_in_row(self, row, num):
        '''Check if num can be inserted in the row.'''
        return num not in self.board[row]    
    
    def valid_in_col(self, col, num):
        '''Check if num can be inserted in the column.'''
        return all(
            self.board[row][col] != num
            for row in range(9)
        )    
    
    def valid_in_square(self, row, col, num):
        '''Check if num can be inserted in 3x3 square.'''
        row_start = (row // 3) * 3
        col_start = (col // 3) * 3
        for row_no in range(row_start, row_start + 3):
            for col_no in range(col_start, col_start + 3):
                if self.board[row_no][col_no] == num:
                    return False
        return True      
    
    def is_valid(self, empty, num):
        '''Check if num is a valid choice
        based on the return value of the 3 valid_in_x functions.'''
        row, col = empty
        valid_in_row = self.valid_in_row(row, num)
        valid_in_col = self.valid_in_col(col, num)
        valid_in_square = self.valid_in_square(row, col, num)
        return all([valid_in_row, valid_in_col, valid_in_square])            
    
    def print_board(self):
        '''Print the puzzle board.'''        
        upper_lines = f'╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢'
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝'
        print(upper_lines)
        for index, line in enumerate(self.board):
            row_list = []
            for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start=1):
                row_square = '|'.join(str(item) for item in part)
                row_list.extend(row_square)
                if square_no != 3:
                    row_list.append('║')
            
            row = ' '.join(row_list)
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
        '''When no empty square can be found the puzzle is solved.
        Otherwise, find the first valid digit to insert from 1 to 9.
        Replace the zero with the valid digit.
        If the puzzle cannot be solved restore the zero.
        Trigger the backtracking if guesses don't lead to the solution.'''
                 
        if (next_empty := self.find_empty_square()) is None:
            return True
        else:            
            for guess in range(1, 10):                
                if self.is_valid(next_empty, guess):
                    row, col = next_empty
                    self.board[row][col] = guess
                    
                    if self.solver():
                        return True
                    self.board[row][col] = 0

        return False
    

def solve_sudoku(board):
    '''Istantiate a Board object, print the puzzle to solve,
    call the solver method from the Board class, print the result
    and return the Board object.'''

    gameboard = Board(board)
    print('\nPuzzle to solve:')
    gameboard.print_board()        
    if gameboard.solver():        
        print('\nSolved puzzle:')
        gameboard.print_board()
    else:
        print('\nThe provided puzzle is unsolvable.')
    return gameboard


puzzle = [
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

solve_sudoku(puzzle)
