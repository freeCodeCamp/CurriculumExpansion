1. Create a class named `Book` with private attributes `__title`, `__author`, `__isbn`, `__genre`, `__available` (default True), `__borrowed_by` (default None), and `__borrow_date` (default None).
2. Create read-only properties for `title`, `author`, `isbn`, `genre`, `available`, `borrowed_by`, and `borrow_date` that return the corresponding private attributes.
3. Implement a `borrow(member)` method in the Book class that:
   - Takes a LibraryMember object as parameter
   - If the book is available, sets `__available` to False, sets `__borrowed_by` to the member, and sets `__borrow_date` to "2024-01-15"
   - Returns a tuple (True, "Book successfully borrowed by [member_name]")
   - If the book is already borrowed, returns (False, "Book is already borrowed by [member_name]")
4. Implement a `return_book()` method in the Book class that:
   - If the book is borrowed, sets `__available` to True, clears `__borrowed_by` and `__borrow_date`
   - Returns a tuple (True, "Book returned by [member_name]")
   - If the book is not borrowed, returns (False, "Book is not currently borrowed")
5. Implement a `__str__()` method in the Book class that returns a string in the format: "'[title]' by [author] - [status]" where status is either "Available" or "Borrowed by [member_name]".
6. Create a class named `LibraryMember` with private attributes `__name`, `__member_id`, `__email`, `__borrowed_books` (empty list), and `__max_books` (default 3).
7. Create read-only properties for `name`, `member_id`, `email`, `borrowed_books` (returns copy of list), and `max_books` that return the corresponding private attributes.
8. Implement a `can_borrow()` method in the LibraryMember class that returns True if the member can borrow more books (current count < max_books).
9. Implement a `borrow_book(book)` method in the LibraryMember class that:
   - Takes a Book object as parameter
   - Checks if the member can borrow more books
   - If successful, calls book.borrow(self) and adds the book to `__borrowed_books` list
   - Returns the result from book.borrow()
   - If the member cannot borrow more books, returns (False, "Cannot borrow more books. Limit is [max_books]")
10. Implement a `return_book(book)` method in the LibraryMember class that:
    - Takes a Book object as parameter
    - Checks if the member has borrowed the book
    - If successful, calls book.return_book() and removes the book from `__borrowed_books` list
    - Returns the result from book.return_book()
    - If the member hasn't borrowed the book, returns (False, "You haven't borrowed '[book_title]'")
11. Implement a `get_borrowed_books_info()` method in the LibraryMember class that returns a formatted string listing all borrowed books or "No books currently borrowed" if none.
12. Implement a `__str__()` method in the LibraryMember class that returns a string in the format: "Member: [name] (ID: [member_id]) - [current_count]/[max_books] books".
13. Create a class named `Library` with private attributes `__name`, `__books` (empty list), and `__members` (empty list).
14. Create read-only properties for `name`, `books` (returns copy of list), and `members` (returns copy of list) that return the corresponding private attributes.
15. Implement an `add_book(book)` method in the Library class that adds a book to the `__books` list and prints "Book '[title]' added to [library_name]".
16. Implement an `add_member(member)` method in the Library class that adds a member to the `__members` list and prints "Member [name] registered at [library_name]".
17. Implement a `find_book_by_title(title)` method in the Library class that returns the first book with a matching title (case-insensitive) or None if not found.
18. Implement a `find_member_by_id(member_id)` method in the Library class that returns the member with a matching ID or None if not found.
19. Implement a `list_available_books()` method in the Library class that prints all books that are currently available for borrowing.
20. Implement a `list_all_books()` method in the Library class that prints all books in the library with their current status.
21. Implement a `list_members()` method in the Library class that prints all registered members.
