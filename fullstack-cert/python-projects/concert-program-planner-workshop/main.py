# This workshop practices working with lists by planning the program of an orchestra concert
# It comes right after the lists lectures, so it doesn't use loops

# Step 1, create a list of pieces
# Explain that a list is an ordered collection of items, created with square brackets
# The titles are given in the step description, since the seed is empty
pieces = ['Carnival Overture', 'Humoresque', 'Song to the Moon', 'Silent Woods']

# Step 2, access the first item with index 0
# Introduces zero-based indexing
print(f'Opening piece: {pieces[0]}')

# Step 3, access the last item with a negative index
print(f'Closing piece: {pieces[-1]}')

# Step 4, get the number of items with len()
print(f'Number of pieces: {len(pieces)}')

# Step 5, add a piece to the end of the list with append()
# Note that append() modifies the list in place
pieces.append('Slavonic Dance No. 8')

# Step 6, add a piece at the start of the list with insert()
pieces.insert(0, 'Slavonic Dance No. 1')

# Step 7, add multiple pieces with extend()
# Contrast with append(), which would add the whole list as a single nested item
pieces.extend(['New World Symphony', 'Cello Concerto in B Minor'])

# Step 8, the soprano cancelled, so remove a piece by value with remove()
pieces.remove('Song to the Moon')

# Step 9, the concert is too long, so remove the last piece with pop()
# Point out that pop() returns the removed item, unlike remove()
removed_piece = pieces.pop()
print(f'Removed from the program: {removed_piece}')

# Step 10, the guest violinist asked for a different piece, so replace an item by assigning to its index
# Lists are mutable
pieces[3] = 'Romance for Violin'


# Step 11, define a function that checks if a piece is in the program with the in operator
# and returns its position with index(), adding 1 so the count starts from 1
def find_piece(piece, program):
    if piece in program:
        return f'{piece} is piece number {program.index(piece) + 1}.'
    # Step 12, return a message for pieces that are not in the program
    return f'{piece} is not in the program.'


# Step 12 (continued), call the function with a piece in the program and one that isn't
print(find_piece('New World Symphony', pieces))
print(find_piece('Stabat Mater', pieces))

# Step 13, split the program in two halves around the intermission with slicing
# Reviews floor division from the numbers lectures
half = len(pieces) // 2
before_intermission = pieces[:half]

# Step 14, slice the second half and print both halves
after_intermission = pieces[half:]
print(f'Before intermission: {before_intermission}')
print(f'After intermission: {after_intermission}')

# Step 15, unpack the first and last pieces, collecting the rest with *
opening, *middle, closing = pieces
print(middle)

# Step 16, create an alphabetical copy of the program with sorted()
alphabetical = sorted(pieces)
print(alphabetical)

# Step 17, print the original list to show that sorted() returns a new list
# and doesn't change the original
print(pieces)
