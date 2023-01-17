const authorContainer = document.getElementById("author-container");

// replace this API with one hosted by FCC
fetch("https://fcc-author-api.herokuapp.com/authors")
  .then((res) => res.json())
  .then((data) => displayUsers(data))
  .catch((err) => {
    authorContainer.innerHTML = `<p class="error-msg">There was an error loading the data</p>`;
    console.error(`There was an error: ${err}`);
  });

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
