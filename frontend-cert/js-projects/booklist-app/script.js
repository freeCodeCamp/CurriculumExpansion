class Book {
  constructor(title) {
    this.title = title;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let books = [];

  let crimeAndPunishment = new Book("Crime and Punishment");
  let brothersKaramazov = new Book("The Brothers Karamazov");

  books.push(crimeAndPunishment);
  books.push(brothersKaramazov);

  let bookList = document.getElementById("books");

  if (books.length > 0) {
    books.forEach((book) => {
      bookList.appendChild(createNewListItem(book.title));
    });
  }
});

function createNewListItem(title) {
  let newElement = document.createElement("li");
  newElement.appendChild(document.createTextNode(title));

  newElement.classList.add("book");

  return newElement;
}
