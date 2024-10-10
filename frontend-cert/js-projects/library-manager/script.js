// Initialize the library with some books – we can make campers fill in the first two, then supply the rest ourselves.
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about:
      'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title:
      'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title:
      'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title:
      'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about:
      'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

// Get books' summaries with map()
function getBookSummaries(catalog) {
  return catalog.map(
    (book) =>
      `${book.title}, ${
        book.about.charAt(0).toLowerCase() + book.about.slice(1)
      }`
  );
}

// Display books with forEach()
function displayBooks(catalog) {
  let output = 'Books in the Library:\n';

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

// Filter book by a particular author with filter()
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

// Use reduce() to calculate total number of pages of books in the library
function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}

const bookSummaries = getBookSummaries(library);
console.log('Book summaries:', bookSummaries);
console.log('\n');

const libraryBooks = displayBooks(library);
console.log(libraryBooks);
console.log('\n');

const booksByArvidKahl = getBooksByAuthor(library, 'Arvid Kahl');
console.log(`Books by Arvid Kahl:`, booksByArvidKahl);
console.log('\n');

const totalPagesOfBooksInLibrary = getTotalPages(library);
console.log(
  `Total number of pages of books in the library: ${totalPagesOfBooksInLibrary}`
);
