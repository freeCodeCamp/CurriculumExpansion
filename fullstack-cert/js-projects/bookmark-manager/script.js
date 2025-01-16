const categoryDropdown = document.getElementById("category-dropdown");
const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryHeading = document.querySelectorAll(".category-name");
const closeFormButton = document.getElementById("close-form-button");
const bookmarkName = document.getElementById("name");
const bookmarkURL = document.getElementById("url");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const categoryList = document.getElementById("category-list");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

addBookmarkButton.addEventListener("click", () => {
    categoryHeading[0].innerText = categoryDropdown.value.charAt(0).toUpperCase()
        + categoryDropdown.value.slice(1);
    displayOrCloseForm();
});

closeFormButton.addEventListener("click", displayOrCloseForm);

const addBookmark = () => {
    const bookmarkObject = {
        name: bookmarkName.value,
        category: categoryDropdown.value,
        url: bookmarkURL.value
    };
    if (bookmarkName.value.length && bookmarkURL.value.length) {
        bookmarks.push(bookmarkObject);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
        bookmarkName.value = "";
        bookmarkURL.value = "";
        displayOrCloseForm()
    } else {
        alert("Please, provide valid name and URL.")
    }
}

addBookmarkButtonForm.addEventListener("click", addBookmark);

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
}

const fillBookmarkList = () => {
    categoryHeading[1].innerText = categoryDropdown.value.charAt(0).toUpperCase()
        + categoryDropdown.value.slice(1);
    const bookmarksToDisplay = bookmarks.filter((i) => {
        if (i.category === categoryDropdown.value) {
            return true
        }
        return false
    });
    if (bookmarksToDisplay.length) {
        categoryList.innerHTML = '';
        for (const bookmark of bookmarksToDisplay) {
            categoryList.innerHTML += `
            <div>
              <input type="radio" name="bookmarks" id="${bookmark.name}" value="${bookmark.name}">
              <label for="${bookmark.name}">
                <a href="${bookmark.url}">${bookmark.name}</a>
              </label>
            </div>`
        }
    } else {
        categoryList.innerHTML = '<p>No Bookmarks Found</p>';
    }
}

viewCategoryButton.addEventListener("click", () => {
    fillBookmarkList();
    displayOrHideCategory();
})

closeListButton.addEventListener("click", displayOrHideCategory)

const deleteBookmark = () => {
    const radioBookmarks = document.querySelectorAll('input[type="radio"]');
    for (const radioBookmark of radioBookmarks) {
        if (radioBookmark.checked) {
            const indexToRemove = bookmarks.findIndex(i => i.name == radioBookmark.value);
            bookmarks.splice(indexToRemove, 1);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            return
        }
    }
}

deleteBookmarkButton.addEventListener("click", () => {
    deleteBookmark();
    fillBookmarkList();
})
