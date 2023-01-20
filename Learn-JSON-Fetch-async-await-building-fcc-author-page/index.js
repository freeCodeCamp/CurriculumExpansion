const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr;

// replace this API with one hosted by FCC
fetch("https://fcc-author-api.herokuapp.com/authors")
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayUsers(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    authorContainer.innerHTML = `<p class="error-msg">There was an error loading the data</p>`;
    console.error(`There was an error: ${err}`);
  });

const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex = endingIndex + 8;
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "No more data to load";
  }
  displayUsers(authorDataArr.slice(startingIndex, endingIndex));
};

const displayUsers = (users) => {
  users.forEach(
    ({ author, image, url, bio }, index) =>
      (authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar">
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 49) + "..." : bio}</p>
        <a class="author-link" rel="Noreferrer noopener" href="${url}" target="_blank">${author} author page</a>
      </div>
    `)
  );
};

loadMoreBtn.addEventListener("click", fetchMoreAuthors);
