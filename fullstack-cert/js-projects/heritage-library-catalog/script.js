// Heritage Library Catalog Workshop
// learn to digitize historical catalog cards, search, group, and export data

// catalog card strings
// format: "Title | Author | Year | Location"
const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases for error handling - teaching: handling missing data
  "Unknown Title |  | 1975 | Shelf X1",  // missing author
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",  // missing year
  "Ancient Scroll | Anonymous | 850 | ",  // missing location
];

// step 1: parse a single catalog card
// teaching: string split(), trim(), converting types
function parseCard(rawString) {
  // split by pipe delimiter and trim whitespace
  const parts = rawString.split("|").map(part => part.trim());

  // destructure the parts - teaching: array destructuring
  const [title, author, year, location] = parts;

  // create and return object with normalized data
  // teaching: object literals, converting string to number
  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year, 10) : "Unknown",
    location: location || "Unknown"
  };
}

// step 2: Parse entire catalog
// teaching: map() to transform arrays
function parseCatalog(rawCards) {
  return rawCards.map(card => parseCard(card));
}

// step 3: Find books by author (case-insensitive)
// teaching: filter(), toLowerCase() for case-insensitive comparison, includes()
function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  return catalog.filter(book =>
    book.author.toLowerCase().includes(searchTerm)
  );
}

// step 4: Group books by decade
// teaching: reduce() to build objects, decade calculation, dynamic object keys
function groupByDecade(catalog) {
  return catalog.reduce((grouped, book) => {
    // skip books without valid years
    if (book.year === "Unknown") {
      // initialize "Unknown" group if it doesn't exist
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      return grouped;
    }

    // calculate decade: floor to nearest 10
    // teaching: Math.floor(), decade calculation
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;  // format: "1810s", "1820s", etc.

    // initialize array for this decade if it doesn't exist
    // teaching: checking properties, dynamic object keys
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }

    grouped[decadeKey].push(book);
    return grouped;
  }, {});
}

// step 5: render a single catalog entry
// teaching: template literals, multi-line strings, string formatting
function renderEntry(entry) {
  // use optional chaining to safely access properties
  // teaching: optional chaining (?.), fallback values
  const title = entry?.title ?? "Unknown";
  const author = entry?.author ?? "Unknown";
  const year = entry?.year ?? "Unknown";
  const location = entry?.location ?? "Unknown";

  // create formatted output using template literals
  return `${"─".repeat(50)}
Title:    ${title}
Author:   ${author}
Year:     ${year}
Location: ${location}
${"─".repeat(50)}`;
}

// step 6: validate entry and warn about missing fields
// teaching: 'in' operator, property checking, console.warn()
function validateEntry(entry) {
  let isValid = true;

  // check each required field using 'in' operator
  // teaching: 'in' operator to check if property exists
  if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
    console.warn(`⚠️  Warning: Missing or unknown title`);
    isValid = false;
  }

  if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
    console.warn(`⚠️  Warning: Missing or unknown author for "${entry.title}"`);
    isValid = false;
  }

  if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
    console.warn(`⚠️  Warning: Missing or unknown year for "${entry.title}"`);
    isValid = false;
  }

  if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
    console.warn(`⚠️  Warning: Missing or unknown location for "${entry.title}"`);
    isValid = false;
  }

  return isValid;
}

// step 7: export catalog to JSON
// teaching: JSON.stringify() with formatting parameters
function exportToJSON(catalog) {
  // the second parameter (null) is for a replacer function
  // the third parameter (2) adds indentation for readability
  return JSON.stringify(catalog, null, 2);
}

// step 8: export catalog to CSV
// teaching: CSV format, map() for transformation, join() for strings
function exportToCSV(catalog) {
  // create CSV header row
  const header = "Title,Author,Year,Location";

  // transform each entry to CSV row
  // teaching: handling commas in data, quotes in CSV format
  const rows = catalog.map(entry => {
    // wrap fields in quotes to handle commas in titles/authors
    const title = `"${entry.title}"`;
    const author = `"${entry.author}"`;
    const year = entry.year;
    const location = `"${entry.location}"`;

    return `${title},${author},${year},${location}`;
  });

  // combine header and rows with newlines
  // teaching: join() to combine array into string
  return [header, ...rows].join("\n");
}

// DEMONSTRATION - following is a demo using all the functions
console.log("═".repeat(60));
console.log("HERITAGE LIBRARY CATALOG DIGITIZATION");
console.log("═".repeat(60));
console.log();

// parse all catalog cards
console.log("Parsing catalog cards...");
const catalog = parseCatalog(rawCatalogCards);
console.log(`Parsed ${catalog.length} catalog cards\n`);

// display a sample parsed entry
console.log("Sample Parsed Entry:");
console.log(catalog[0]);
console.log();

// search by author
console.log("Searching for books by 'King'...");
const kingBooks = findByAuthor(catalog, "king");
console.log(`Found ${kingBooks.length} book(s):`);
kingBooks.forEach(book => {
  console.log(`  - ${book.title} (${book.year})`);
});
console.log();

// search by another author
console.log("Searching for books by 'Asimov'...");
const asimovBooks = findByAuthor(catalog, "asimov");
console.log(`Found ${asimovBooks.length} book(s):`);
asimovBooks.forEach(book => {
  console.log(`  - ${book.title} by ${book.author}`);
});
console.log();

// group by decade
console.log("Grouping books by decade...");
const byDecade = groupByDecade(catalog);
console.log("Decades represented:");
Object.keys(byDecade).sort().forEach(decade => {
  console.log(`  ${decade}: ${byDecade[decade].length} book(s)`);
});
console.log();

// display books from a specific decade
console.log("Books from the 1980s:");
if (byDecade["1980s"]) {
  byDecade["1980s"].forEach(book => {
    console.log(`  - ${book.title} (${book.year})`);
  });
}
console.log();

// render a formatted entry
console.log("Formatted Catalog Entry:");
console.log(renderEntry(catalog[0]));
console.log();

// validate entries and show warnings
console.log("Validating catalog entries...");
let validCount = 0;
let invalidCount = 0;

catalog.forEach(entry => {
  if (validateEntry(entry)) {
    validCount++;
  } else {
    invalidCount++;
  }
});

console.log(`\nValidation complete: ${validCount} valid, ${invalidCount} with issues\n`);

// export to JSON (show first 500 characters)
console.log("Exporting to JSON format...");
const jsonExport = exportToJSON(catalog.slice(0, 3)); // Show first 3 entries
console.log("Sample JSON output:");
console.log(jsonExport);
console.log("...(truncated)\n");

// export to CSV (show first few lines)
console.log("Exporting to CSV format...");
const csvExport = exportToCSV(catalog);
const csvLines = csvExport.split("\n");
console.log("Sample CSV output:");
console.log(csvLines.slice(0, 5).join("\n"));
console.log("...(truncated)\n");

// summary statistics
console.log("═".repeat(60));
console.log("CATALOG SUMMARY");
console.log("═".repeat(60));
console.log(`Total books: ${catalog.length}`);
console.log(`Decades represented: ${Object.keys(byDecade).length}`);
console.log(`Oldest book: ${Math.min(...catalog.filter(b => b.year !== "Unknown").map(b => b.year))}`);
console.log(`Newest book: ${Math.max(...catalog.filter(b => b.year !== "Unknown").map(b => b.year))}`);
console.log("═".repeat(60));

