class Book:
    def __init__(self, title, author, isbn, genre):
        self.__title = title
        self.__author = author
        self.__isbn = isbn
        self.__genre = genre
        self.__available = True
        self.__borrowed_by = None
        self.__borrow_date = None

    @property
    def title(self):
        return self.__title

    @property
    def author(self):
        return self.__author

    @property
    def isbn(self):
        return self.__isbn

    @property
    def genre(self):
        return self.__genre

    @property
    def available(self):
        return self.__available

    @property
    def borrowed_by(self):
        return self.__borrowed_by

    @property
    def borrow_date(self):
        return self.__borrow_date

    def borrow(self, member):
        if not self.__available:
            return False, f"Book '{self.__title}' is already borrowed by {self.__borrowed_by.name}"
        
        self.__available = False
        self.__borrowed_by = member
        self.__borrow_date = "2024-01-15"  # Simplified date for demo
        return True, f"Book '{self.__title}' successfully borrowed by {member.name}"

    def return_book(self):
        if self.__available:
            return False, f"Book '{self.__title}' is not currently borrowed"
        
        member_name = self.__borrowed_by.name
        self.__available = True
        self.__borrowed_by = None
        self.__borrow_date = None
        return True, f"Book '{self.__title}' returned by {member_name}"

    def __str__(self):
        status = "Available" if self.__available else f"Borrowed by {self.__borrowed_by.name}"
        return f"'{self.__title}' by {self.__author} - {status}"


class LibraryMember:
    def __init__(self, name, member_id, email):
        self.__name = name
        self.__member_id = member_id
        self.__email = email
        self.__borrowed_books = []
        self.__max_books = 3

    @property
    def name(self):
        return self.__name

    @property
    def member_id(self):
        return self.__member_id

    @property
    def email(self):
        return self.__email

    @property
    def borrowed_books(self):
        return self.__borrowed_books.copy()

    @property
    def max_books(self):
        return self.__max_books

    def can_borrow(self):
        return len(self.__borrowed_books) < self.__max_books

    def borrow_book(self, book):
        if not self.can_borrow():
            return False, f"Cannot borrow more books. Limit is {self.__max_books}"
        
        success, message = book.borrow(self)
        if success:
            self.__borrowed_books.append(book)
        
        return success, message

    def return_book(self, book):
        if book not in self.__borrowed_books:
            return False, f"You haven't borrowed '{book.title}'"
        
        success, message = book.return_book()
        if success:
            self.__borrowed_books.remove(book)
        
        return success, message

    def get_borrowed_books_info(self):
        if not self.__borrowed_books:
            return "No books currently borrowed"
        
        info = f"Books borrowed by {self.__name}:\n"
        for i, book in enumerate(self.__borrowed_books, 1):
            info += f"{i}. {book.title} by {book.author}\n"
        return info

    def __str__(self):
        return f"Member: {self.__name} (ID: {self.__member_id}) - {len(self.__borrowed_books)}/{self.__max_books} books"


class Library:
    def __init__(self, name):
        self.__name = name
        self.__books = []
        self.__members = []

    @property
    def name(self):
        return self.__name

    @property
    def books(self):
        return self.__books.copy()

    @property
    def members(self):
        return self.__members.copy()

    def add_book(self, book):
        self.__books.append(book)
        print(f"Book '{book.title}' added to {self.__name}")

    def add_member(self, member):
        self.__members.append(member)
        print(f"Member {member.name} registered at {self.__name}")

    def find_book_by_title(self, title):
        for book in self.__books:
            if book.title.lower() == title.lower():
                return book
        return None

    def find_member_by_id(self, member_id):
        for member in self.__members:
            if member.member_id == member_id:
                return member
        return None

    def list_available_books(self):
        available = [book for book in self.__books if book.available]
        if not available:
            print("No books available for borrowing")
            return
        
        print(f"\nAvailable books at {self.__name}:")
        for i, book in enumerate(available, 1):
            print(f"{i}. {book.title} by {book.author} ({book.genre})")

    def list_all_books(self):
        if not self.__books:
            print("No books in the library")
            return
        
        print(f"\nAll books at {self.__name}:")
        for i, book in enumerate(self.__books, 1):
            print(f"{i}. {book}")

    def list_members(self):
        if not self.__members:
            print("No members registered")
            return
        
        print(f"\nMembers of {self.__name}:")
        for member in self.__members:
            print(f"- {member}")


# Example usage and testing
def main():
    # Create a library
    library = Library("Central Library")
    
    # Create some books
    book1 = Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565", "Fiction")
    book2 = Book("Python Programming", "John Smith", "978-1234567890", "Technology")
    book3 = Book("Data Science Basics", "Jane Doe", "978-0987654321", "Science")
    
    # Add books to library
    library.add_book(book1)
    library.add_book(book2)
    library.add_book(book3)
    
    # Create members
    member1 = LibraryMember("Alice Johnson", "M001", "alice@email.com")
    member2 = LibraryMember("Bob Wilson", "M002", "bob@email.com")
    
    # Register members
    library.add_member(member1)
    library.add_member(member2)
    
    # Display library status
    print("\n" + "="*50)
    library.list_all_books()
    library.list_members()
    
    # Test borrowing
    print("\n" + "="*50)
    print("Testing book borrowing:")
    
    # Alice borrows a book
    success, message = member1.borrow_book(book1)
    print(message)
    
    # Bob tries to borrow the same book
    success, message = member2.borrow_book(book1)
    print(message)
    
    # Bob borrows a different book
    success, message = member2.borrow_book(book2)
    print(message)
    
    # Display updated status
    print("\n" + "="*50)
    library.list_all_books()
    print("\nMember status:")
    print(member1)
    print(member2)
    
    # Test returning books
    print("\n" + "="*50)
    print("Testing book returns:")
    
    success, message = member1.return_book(book1)
    print(message)
    
    # Display final status
    print("\n" + "="*50)
    library.list_all_books()
    print("\nMember status:")
    print(member1)
    print(member2)


if __name__ == "__main__":
    main()
