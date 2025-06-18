const resultsContainer = document.querySelector(".results-container");

/**
 * Some results might contain curse words.
 * So we should bleep that out when possible since this
 * demo project will be shown to campers.
 */

const curseWordsMap = {
  bitch: "b**ch",
  asshole: "a*****e",
  shit: "s**t",
  fuck: "f**k",
  bastard: "b*****d",
};

function getCensoredResult(result) {
  let words = result.split(" ");
  return words
    .map((word) => curseWordsMap[word.toLowerCase()] || word)
    .join(" ");
}

function displayResults(results) {
  function renderThumbnail(thumbnail, description) {
    if (!thumbnail) return "";
    return `<img class="thumbnail" src="https:${thumbnail.url}" alt="${description}">`;
  }

  if (results.pages.length === 0) {
    resultsContainer.innerHTML = `<h2 class="empty-msg">Your query did not return any results. Please try again.</h2>`;
    return;
  }

  resultsContainer.innerHTML = results.pages
    .map(({ title, id, thumbnail, description, key }) => {
      if (!thumbnail && !description) return;

      return `
      <div id="${id}" class="card">
        <h2 class="card-title">${getCensoredResult(title)}</h2>
        <div class="description-thumbnail-container">
          ${renderThumbnail(thumbnail, description)}
          ${description ? `<p class="description">${description}</p>` : ""}
        </div>
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

async function getRandomResult() {
  try {
    const res = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/random/summary"
    );
    const data = await res.json();
    console.log(data);
    const { title, extract, content_urls } = data;
    resultsContainer.innerHTML = `
      <div class="card">
        <h2 class="card-title">${getCensoredResult(title)}</h2>
        ${extract ? `<p class="random-article-description">${extract}</p>` : ""}
        <a target="__blank" href=${
          content_urls.desktop.page
        } class="read-more-link"> 
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
    `;
  } catch (error) {
    console.error("There was an error fetching the results: ", error);
    resultsContainer.innerHTML = `<p class="error-msg">Sorry, there was an error with your query. Try again.</p>`;
  }
}

const randomArticleBtn = document.querySelector(".random-article-btn");
randomArticleBtn.addEventListener("click", getRandomResult);
