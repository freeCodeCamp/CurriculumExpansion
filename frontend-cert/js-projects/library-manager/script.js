// Initialize the library with some books – we can make campers fill in the first two, then supply the rest ourselves.
const library = [
  {
    title: 'Battle Cry of Freedom: The Civil War Era',
    author: 'James M. McPherson',
    about: 'A book about the American civil war',
    pages: 904,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about:
      'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: '1776',
    author: 'David McCullough',
    about:
      'A book about those who marched with George Washington during the Declaration of Independence',
    pages: 386,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'Congo: The Epic History of a People',
    author: 'Adam Hochschild',
    about:
      'A book about the people of Congo and the colonization of their land by King Leopold',
    pages: 639,
  },
  {
    title: 'Precolonial Black Africa',
    author: 'Cheikh Anta Diop',
    about: 'A book about the analysis of precolonial African states',
    pages: 240,
  },
  {
    title: 'How Europe Underdeveloped Africa',
    author: 'Walter Rodney',
    about:
      'A book detailing how European countries divided Africa between themselves and exploited it',
    pages: 312,
  },
  {
    title: 'A History of the Guyanese Working People',
    author: 'Walter Rodney',
    about:
      'The history of African and Aisan immigration into Guyana and the impact of colonization on Guyana',
    pages: 312,
  },
];

// Add book with push()
function addBook(title, author, pages) {
  const newBook = { title, author, pages };
  library.push(newBook);
}

// Use map to send the books into an array
const bookSummaries = library.map((book) => {
  return `${book.title}, ${
    book.about.charAt(0).toLowerCase() + book.about.slice(1)
  }`;
});

// Display books with forEach()
function displayBooks() {
  console.log('Library Books:');
  library.forEach((book) => {
    console.log(
      `${book.title} by ${book.author}, ${book.about} (${book.pages} pages)`
    );
  });
}

// Filter book by a particular author
const author = 'Walter Rodney';
const booksByAuthor = library.filter((book) => book.author === author);

// Use reduce() to calculate total number of pages of books in the library
const totalPages = library.reduce((acc, book) => acc + book.pages, 0);

// Log results to the console and make sure a new line separate each
addBook('There was a Country', 'Chinua Achebe', 352);
console.log('\n');
console.log('Book summaries:', bookSummaries);
console.log('\n');
displayBooks();
console.log('\n');
console.log(`Books by ${author}:`, booksByAuthor);
console.log('\n');
console.log(`Total number of pages of books in the library: ${totalPages}`);
