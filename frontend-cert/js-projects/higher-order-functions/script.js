function sortByYear(book1, book2) {
  if (book1.release_year < book2.release_year) {
    return -1;
  }

  if (book1.release_year > book2.release_year) {
    return 1;
  }

  return 0;
}

const books = [
  {
    title: "The Great Gatsby",
    author_name: "F. Scott Fitzgerald",
    release_year: 1925,
  },
  {
    title: "In Search of Lost Time",
    author_name: "Marcel Proust",
    release_year: 1913,
  },
  {
    title: "Ulysses",
    author_name: "James Joyce",
    release_year: 1922,
  },
  {
    title: "One Hundred Years of Solitude",
    author_name: "Gabriel García Márquez",
    release_year: 1967,
  },
  {
    title: "The Catcher in the Rye",
    author_name: "J. D. Salinger",
    release_year: 1951,
  },
];

let filteredBooks = books.filter((book) => book.release_year < 1950);

let filteredBooksSorted = filteredBooks.sort(sortByYear);

console.log("Books Written Before 1950 (sorted according to release year)");
filteredBooksSorted.forEach((book) => {
  console.log(`${book.title} by ${book.author_name} (${book.release_year})`);
});
