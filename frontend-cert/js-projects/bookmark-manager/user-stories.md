1. You should complete the Bookmark Manager app to handle the bookmark objects contained in a `bookmarks` array, which is stored in the local storage.
1. Each bookmark object should have three keys: `name`, `category`, and `url`.
1. You should have a function named `displayOrCloseForm` that toggles the `hidden` class on `#main-section` and `#form-section`.
1. When you click `#add-bookmark-button`, you should update the inner text of `.category-name` to be the value of the selected option from `#category-dropdown` and call `displayOrCloseForm` to display the form section and hide the main section.
1. When you click `#close-form-button`, you should hide the form section and display the main section.
1. When you click `#add-bookmark-button-form`, you should update the `bookmarks` key stored in the local storage by adding a bookmark object to the end of the array. The object should have `name` set to the value of the `#name` input, `category` set to the value of the selected option from the category dropdown, and `url` set to the value of the `#url` input.
1. Once the `bookmarks` key is updated, you should reset the value of `#name` and `#url` to an empty string before closing the form section and showing back the main section.
1. You should have a function named `displayOrHideCategory` that toggles the `hidden` class on `#main-section` and `#bookmark-list-section`.
1. When you click `#view-category-button`, you should update the inner text of `.category-name` to be the value of the selected option from `#category-dropdown`, modify the inner HTML of `#category-list` depending on the content of the selected category and call the `displayOrHideCategory` function.
1. If the category is empty, you should add a `p` element with the text `No Bookmarks Found` to `#category-list`'s inner HTML.
1. If the selected category is not empty, you should add a radio button having the `id` and `value` attributes set to the bookmark name for each bookmark in the category.
Also, each radio button should have a corresponding label containing an anchor element with the bookmark name and the `href` attribute set to the bookmark url.
1. When you click `#close-list-button`, you should hide `#bookmark-list-section` and display the main section.
1. When you click `#delete-bookmark-button`, you should delete the bookmark corresponding to the selected radio button from the local storage and update the displayed bookmark list.
