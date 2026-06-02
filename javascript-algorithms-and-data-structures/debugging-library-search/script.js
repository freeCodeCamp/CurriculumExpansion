const library = [
    "The Hobbit", "1984", "Dune", "Fahrenheit 451", "To Kill a Mockingbird",
    "The Great Gatsby", "Moby Dick", "Pride and Prejudice", "Frankenstein"
];

const searchBtn = document.getElementById('search');
const statusDisplay = document.getElementById('statusMessage');
const bookInput = document.getElementById('bookTitleInput');
const scanStatusDisplay = document.getElementById('scanStatus');

const find_my_book = (title) => {
    if (title === "") {
        throw new Error("Search field cannot be empty");
    }

    if (!library.includes(title)) {
        throw new Error(title + " not found!");
    }

    return title + " is available to borrow!";
}

searchBtn.addEventListener('click', () => {
    try {
        const result = find_my_book(bookInput.value);
        if (result) {
            statusDisplay.textContent = result;
        }
    } catch (err) {
        statusDisplay.textContent = err.message;
        console.error(err);
    } finally {
        bookInput.value = "";
        scanStatusDisplay.textContent = "Library scan finished.";
    }
});