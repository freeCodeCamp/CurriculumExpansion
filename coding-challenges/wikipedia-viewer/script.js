const resultsContainer = document.querySelector(".results-container");

function displayResults(results) {
  console.log(results.pages);

  function renderThumbnail(thumbnail, description) {
    if (!thumbnail) return "";
    return `<img class="thumbnail" src="https:${thumbnail.url}" alt="${description}">`;
  }

  if (results.pages.length === 0) {
    console.log("does this show up?");
    resultsContainer.innerHTML = `<h2 class="empty-msg">Your query did not return any results. Please try again.</h2>`;
    return;
  }

  resultsContainer.innerHTML = results.pages
    .map(({ title, id, thumbnail, description, key }) => {
      if (!thumbnail && !description) return;

      return `
      <div id="${id}" class="card">
        <h2 class="card-title">${title}</h2>
        <div class="description-thumbnail-container">
          ${renderThumbnail(thumbnail, description)}
          ${description ? `<p class="description">${description}</p>` : ""}
          <a target="__blank" href=${`https://en.wikipedia.org/wiki/${key}`} class="read-more-link"> 
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M18 6H9M18 6V15"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    `;
    })
    .join("");
}
async function fetchResults(query) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${query}&limit=10`
    );
    const data = await res.json();
    displayResults(data);
  } catch (error) {
    console.error("There was an error fetching the results: ", error);
    resultsContainer.innerHTML = `<p class="error-msg">Sorry, there was an error with your query. Try again.</p>`;
  }
}

const form = document.querySelector("form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchResults(searchInput.value);
});

const defaultEmptyContainerContent = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="book-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p>
      Search for Wikipedia articles or click on the "Random Article" button
      to get started.
    </p>

`;
