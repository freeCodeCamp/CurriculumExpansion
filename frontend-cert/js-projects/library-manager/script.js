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

// Add book with push()
function addBook(title, author, pages) {
  const newBook = { title, author, pages }; // explain object shorthand property here and provide a basic example
  library.push(newBook);
}

// Use map to send the books into an array
const bookSummaries = library.map((book) => {
  return `${book.title}, ${
    book.about.charAt(0).toLowerCase() + book.about.slice(1) // teach charAt() method here
  }`;
});

// Display books with forEach()
function displayBooks() {
  console.log('Library Books:');
  library.forEach((book) => {
    console.log(
      `${book.title} by ${book.author}, ${book.about} (${book.pages} pages)\n`
    );
  });
}

// Filter book by a particular author
const author = 'Arvid Kahl';
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
